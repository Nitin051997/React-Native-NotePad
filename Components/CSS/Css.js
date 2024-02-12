import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      
      textArea: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 0,
        textAlignVertical: 'top', 
        padding: 6,
        fontSize: 18,
      },

      scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
      },

})