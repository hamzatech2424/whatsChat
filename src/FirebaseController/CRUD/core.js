import firestore from '@react-native-firebase/firestore';


export const createMessage = (collectionName, docId, innerCollectionName,uniMessagId ,messageObj) => {
    return new Promise((resolve, reject) => {
        firestore().collection(collectionName)
            .doc(docId)
            .collection(innerCollectionName)
            .doc(uniMessagId)
            .set(messageObj)
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })
}


export const readMessages = (collectionName, docId, innerCollectionName, filter) => {
    return new Promise((resolve, reject) => {
        firestore().collection(collectionName)
            .doc(docId)
            .collection(innerCollectionName)
            .orderBy(filter.attr, filter.value)
            .get()
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })
}


export const updateMessage = (collectionName, docId, innerCollectionName, selectedId, updatedObj) => {
    return new Promise((resolve, reject) => {
        firestore().collection(collectionName)
            .doc(docId)
            .collection(innerCollectionName)
            .doc(selectedId)
            .update(updatedObj)
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })
}



export const deleteMessage = (collectionName, docId, innerCollectionName, selectedId) => {
    return new Promise((resolve, reject) => {
        firestore().collection(collectionName)
            .doc(docId)
            .collection(innerCollectionName)
            .doc(selectedId)
            .delete()
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })
}



//levelZero

export const levelZeroCreate = (collectionName,dataObj) =>  {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName).add(dataObj)
        .then((result)=>{
            resolve(result)
        }).
        catch((error)=>{
            reject(error)
        })
    })
}


export const levelZeroRead = (collectionName) =>  {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName)
        .then((result)=>{
            resolve(result)
        }).
        catch((error)=>{
            reject(error)
        })
    })
}


export const levelZeroDelete = (collectionName,documentId,) =>  {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName).doc(documentId).delete()
        .then((result)=>{
            resolve(result)
        }).
        catch((error)=>{
            reject(error)
        })
    })
}



export const levelZeroUpdate = (collectionName,documentId,updatedObj) =>  {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName).doc(documentId).update(updatedObj)
        .then((result)=>{
            resolve(result)
        }).
        catch((error)=>{
            reject(error)
        })
    })
}


//levelOne

export const levelOneCreate = (collectionName,documentId,dataObj,inCollectionName) =>  {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName).doc(documentId).collection(inCollectionName).add(dataObj)
        .then((result)=>{
            resolve(result)
        }).
        catch((error)=>{
            reject(error)
        })
    })
}


export const levelOneRead = (collectionName,documentId,inCollectionName) =>  {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName).doc(documentId).collection(inCollectionName)
        .then((result)=>{
            resolve(result)
        }).
        catch((error)=>{
            reject(error)
        })
    })
}


export const levelOneDelete = (collectionName,documentId,inCollectionName,inDocumentId) =>  {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName).doc(documentId).collection(inCollectionName).doc(inDocumentId).delete()
        .then((result)=>{
            resolve(result)
        }).
        catch((error)=>{
            reject(error)
        })
    })
}


export const levelOneUpdate = (collectionName,documentId,inCollectionName,inDocumentId,updatedObj) =>  {
    return new Promise((resolve,reject)=>{
        firestore().collection(collectionName).doc(documentId).collection(inCollectionName).doc(inDocumentId).update(updatedObj)
        .then((result)=>{
            resolve(result)
        }).
        catch((error)=>{
            reject(error)
        })
    })
}