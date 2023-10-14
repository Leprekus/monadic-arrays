
//wrapper type
const MonadicArray = <T>(x: T[]) => ({
    emit: () => x,
    map: (f: any) => {
        var len = x.length
        var newArray =  new Array( len )
        for(var i = 0; i < len; i++) {
            newArray[i] = f(x[i])
        }
        return MonadicArray(newArray)
    },
    keepIf: (f: any) => {
        var len = x.length
        var newArr = new Array()
        var idx = 0;
        for(var i = 0; i < len; i++) {
            var conditionMet = f(x[i])
            if(conditionMet) {
                newArr[idx] = x[i]
                idx++
            }
        }
        return MonadicArray(newArr)
    },
    sort: (f: any) => x.sort(el => f(el)),
    forEach: (f: any) => {
        var len = x.length;
        for(var i = 0; i < len; i++) {
            f(x[i])
        }
    },
    push: (el: T) => x.push(el),
    pushFront: (el: T) => x.unshift(el)
})



