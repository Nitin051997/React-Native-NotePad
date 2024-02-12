import { useState } from "react";
import { Alert, Button, TextInput } from "react-native";
// import { Surface, Group } from "@react-native-community/art";

export const ElementInput = (props) => {

    const handleValue = (text) => {
        setValue(text)
    }

    return <TextInput placeholder={props.placeholder} style={props.stylecss} value={props.value} onChangeText={handleValue} multiline/>

}

export const ElementButton = (props) => {

    const handleOnClick = () => {
        // Alert.alert('handleOnClick',`${props.index}`)
        if(props.title == 'Open'){
            props.updateMyState(true,`${props.index}`)
            }else if(props.title == 'Close'){
                props.updateMyState(false,`${props.index}`)
            }
    }

    return <Button key={props.index} title={props.title} onPress={handleOnClick}></Button>

}

// export const ElementArt = () => {

//     return (
//         <Surface width={200} height={400}>
//           <Shape d={path} stroke="#000" strokeWidth={2} />
//         </Surface>
//       );
//     };