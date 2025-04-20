import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    where,
    updateDoc,
    deleteDoc,
    doc, 
    serverTimestamp
} from 'firebase/firestore';
import { UserAuth } from './AuthContext';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [taskList, setTaskList] = useState([]);
    const { user } = UserAuth();


    useEffect(() => {
        if(!user?.uid) return;

        const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tasks = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log("Fetched tasks for user:", user.uid, tasks);
            setTaskList(tasks);
        });
    
        return () => unsubscribe();
    }, [user]);


    //Add task
    const addTask = async ({ name, description }) => {
        try {
            await addDoc(collection(db, "tasks"), {
                userId: user.uid,
                name,
                description,
                checked: false,
                createdAt: serverTimestamp()
            });
        } catch (error) {
            console.error("Failed to add task:", error);
        }
    };

    const checkTask = async (taskId) => {
        const taskRef = doc(db, "tasks", taskId);
        const task = taskList.find(t => t.id === taskId);
        await updateDoc(taskRef, {
            checked: !task.checked
        });
    };

    const updateTask = async (taskId, { name, description }) => {
        const taskRef = doc(db, "tasks", taskId);
        await updateDoc(taskRef, {
            name,
            description
        });
    };

    const deleteTask = async (taskId) => {
        const taskRef = doc(db, "tasks", taskId);
        await deleteDoc(taskRef);
    };

    return (
        <TaskContext.Provider value={{
            taskList,
            addTask,
            updateTask,
            deleteTask,
            checkTask
        }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;