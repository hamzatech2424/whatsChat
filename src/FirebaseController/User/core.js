import firestore from '@react-native-firebase/firestore';


export const creatingUser = (collectionName,userId,userData) =>  {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName).doc(userId).set(userData)
        .then((result)=>{
            resolve(result)
        }).
        catch((error)=>{
            reject(error)
        })
    })
}


export const getUsers = (collectionName,where) => {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName).where(where.attr,where.operator,where.filterThing).get().then((result)=>{
            resolve(result)
        }).catch((error)=>{
            reject(error)
        })
    })
}