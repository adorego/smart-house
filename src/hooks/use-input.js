import {useState} from 'react';

const useInput = (validationFunc, defaultValue='', touched=false ) => {

    const [value, setValue] = useState(defaultValue);
    const [isTouched, setIsTouched] = useState(false);

    const validationError = validationFunc ? validationFunc(value).errorMessage : '';
    const valueIsValid =  validationFunc ? validationFunc(value).pass: false;
    const isInputInvalid = !touched ? !valueIsValid && isTouched : !valueIsValid
    
    const onChangeHandler = (event) =>{
        
        setValue(event.target.value);
        
        
        
    }

    const onChangeNumberHandler = (event) =>{
        const currentValue = event.target.value;
        const modifyValue = currentValue.replace(/\,|\./g,'');
        let finalValue;
        if(!isNaN(Number(currentValue))){
            const numberFormat = Intl.NumberFormat("es-PY");
            finalValue = numberFormat.format(Number(modifyValue));
            setValue(finalValue);
        }
    }

    const onBlurHandler = (event) =>{
        setIsTouched(true);
        
    }

    const onFocus = (event) => {
        if(!isTouched && !touched){
            setValue("");
        }
        
        
    }
    
    return(
        {
            value,
            setValue,
            onChangeHandler,
            onChangeNumberHandler,
            onBlurHandler,
            isInputInvalid,
            errorMessage:validationError,
            onFocus,
            isTouched,
            valueIsValid
        }
    )
}

export default useInput;