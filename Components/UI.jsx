import { styles } from "./CSS/Css"
import { ScrollView, View } from "react-native"
import NavBar from "./NavBar"
import { MultiTab } from "./MultiTab"

export const UserInterface = ({navigation}) => {

    return <ScrollView contentContainerStyle={styles.scrollView}>
            <NavBar/>
                <View style={styles.container}>
                    <MultiTab/>
                </View>
        </ScrollView>
}
