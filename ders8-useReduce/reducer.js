//rxreducer kısayol

export const reducer = (state, action) => {
    switch (action.type){ //actiondan gelen type a göre bu satırı çalıştır(if else gibi, onu da kullanabilirdik)
    case 'FETCH_START':
        return { ...state, data:"", loading:true, error:'' }
    case 'FETCH_SUCCESS':
        return { ...state, data:action.payload, loading:false, error:'' }//action içinde type ve payload var, type:hangi case e gireceğimizi anlarız payload ile içine gelen veri varsa onu alırız
    case 'FETCH_FAIL':
        return { ...state, data:"", loading:false, error:action.payload }
        // return(...state, data'',loading:false, error:"Something went wrong!") yazdırdık
        default:
            return state;
    }
};
