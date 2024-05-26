
const findDuplicate = (nums) => {
    let copyArr = nums.slice()
    let sortArr = copyArr.sort((a,b) => a-b)
    for(let i = 0; i < sortArr.length; i++){
        if(sortArr[i] === sortArr[i + 1]){
            return sortArr[i]
        }
    }
}

