import { useEffect, useState } from "react"
import { ElementButton, ElementInput } from "./TabCell"
import { styles } from "./CSS/Css"
import JsonData from "./JSON/Data.json"
import { Button, View , Text , Alert, TextInput } from "react-native"

export const MultiTab = () => {

    const [display,setDisplay] = useState(false)
    const [loading,setLoading] = useState(false)
    const [addBtn,setaddBtn] = useState(false)
    const [data,setData] = useState(JsonData)
    const [selectedTabIndex,setSelectedTabIndex] = useState(null)
    const [value,setValue] = useState('')
    const [store,setStore] = useState(JsonData)

    const updateMyState = (newState,index) => {
        // Alert.alert('insideupdateMyState',`${newState}`)
        setDisplay(newState)
        setaddBtn(newState)
        setSelectedTabIndex(`${index}`)
    }

    const handleValue = (text) => {
        setValue(text)
    }

    function updateNewTab () {
        setData((old) => {
                return [...old,{"open": "Open",
                                "close": "Close",
                                "placeholder": "Note....",
                                "value": ""}]
            })
            setStore((old) => {
                return [...old,{"open": "Open",
                                "close": "Close",
                                "placeholder": "Note....",
                                "value": ""}]
            })
        setSelectedTabIndex(`${data.length}`)
        setaddBtn(true)
        setDisplay(true)
    }

    function deleteTab () {
        // Alert.alert('deleteTab',selectedTabIndex)
        let newObj = []
        store.forEach((fe,i)=>{
            if(`${i}` != selectedTabIndex){
                newObj.push(fe)
            }
        })
        setData(newObj)
        setStore(newObj)
        setDisplay(false)
        setaddBtn(false)
    }

    function handleSave () {
        // Alert.alert('handleSave',value)
        setStore((old) => {
            if(old.some((res,i) => (`${i}` == selectedTabIndex))){
                // Alert.alert("Values of index",selectedTabIndex)
                return old.map((oldResult,i) => {
                    if(oldResult.value !== value && `${i}` == selectedTabIndex){
                        // Alert.alert('insided Update',value)
                        return {"open": "Open",
                                "close": "Close",
                                "placeholder": "Note....",
                                "value": value}
                    }else{
                        // Alert.alert('insided old Data',value)
                        return oldResult
                    }
                })
            }else{
                // Alert.alert('inside final else',value)
                return [...old,{"open": "Open",
                                "close": "Close",
                                "placeholder": "Note....",
                                "value": value}]
            }
        })
    }

    let onClickVal = '';

    useEffect(() => {
        if(display == true){
            // Alert.alert('inside useEffect if condition',selectedTabIndex)
            onClickVal = (store.filter((fil,i) => {
                return `${i}` == selectedTabIndex
            }).map((res) => {
                // Alert.alert('inside the store',`${res.value}`) 
                return res.value
            }))
        }
        setValue(`${onClickVal}`)
    },[display])

    return <>
    {!display ? (data.map((objVal,i) => {
        return  <><ElementButton index={i} title={objVal.open} updateMyState={updateMyState}/></>
    })) : (data.filter((fil,i) => {
            return `${i}` == selectedTabIndex
        }).map((newObj) => {
                return <>
                        <TextInput placeholder={newObj.placeholder} value={value} style={styles.textArea} onChangeText={handleValue} multiline />
                        <ElementButton index={selectedTabIndex} title={newObj.close} updateMyState={updateMyState}/>
                        <Button title="Save" onPress={handleSave}/>
                        <Button title="Delete" onPress={deleteTab}/>
                        </>
            }))}
    {!addBtn ? (<Button title="Add" onPress={updateNewTab}/>) : (<></>)}
    </>
}