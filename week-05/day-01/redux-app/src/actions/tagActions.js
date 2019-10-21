function addTag(tag){
    return {
        type: 'ADD_TAG',
        tag
    }
}

function removeTag(tag){
    return {
        type: 'REMOVE_TAG',
        tag
    }
}

function removeAll(){
    return {
        type: 'REMOVE_TAGS'
    }
}

export {addTag, removeTag, removeAll};