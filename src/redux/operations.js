import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, firestore } from 'firebase/firestore'
import { db } from '../../config'

export const authUserThunk = createAsyncThunk('auth/register', async (
    userData, thunkApi) => {
        try {
            const { email, password, displayName } = userData;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password, displayName);
            const user = userCredential.user;

            await writeUserDataToFirestore(email, displayName);

            return user;
         } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
    })

    const writeUserDataToFirestore = async (email, displayName) => {
        try {
            console.log('Початок запису в Firestore');
            const docRef = await addDoc(collection(db, 'users'), {
                email,
                displayName,
            });
            console.log('Документ успішно доданий з ідентифікатором:', docRef.id);
        } catch (error) {
            console.error('Помилка при додаванні документа:', error);
            // throw error;
        }
    };