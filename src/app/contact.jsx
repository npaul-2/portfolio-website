import { Link } from 'expo-router'
import { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Footer from '../components/Footer'
import Spacer from '../components/Spacer'
import ThemedButton from '../components/ThemedButton'
import ThemedText from '../components/ThemedText'
import ThemedTextInput from '../components/ThemedTextInput'
import ThemedView from '../components/ThemedView'

const Contact = () => {
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [msg, setMsg]= useState('')

  const handleSubmit = () => {
    console.log('contact info submitted', name, msg, email)
  }

  return (
    <ThemedView style={{flex: 1}}>
    <ScrollView>
    <ThemedView style={styles.container}>

      <Spacer/>

      <ThemedText title={true} style={styles.heading}>
         Contact Form {"\n"}
      </ThemedText>
      <Spacer/>

      <ThemedTextInput style={{width: 600, marginBottom: 20}}
      placeholder='Name'
      onChangeText={setName}
      value={name}
      ></ThemedTextInput>

      <ThemedTextInput style={{width: 600, marginBottom: 20}}
      placeholder='Email'
      keyboardType="email-address"
      onChangeText={setEmail}
      value={email}
      ></ThemedTextInput>

      <ThemedTextInput style={{
        width: 600,
        height: 200,
        marginBottom: 20,
        padding: 15,
        textAlignVertical: 'top'
        }}
        placeholder='Message'
        onChangeText={setMsg}
        value={msg}
        multiline={true}
        numberOfLines={7}
      ></ThemedTextInput>

      <ThemedButton onPress={handleSubmit}>
        <ThemedText>Submit</ThemedText>
      </ThemedButton>

      <Spacer/>

      <ThemedText style>
        Github: 
        <Link href="https://github.com/npaul-2"
           style={styles.link}>
                <ThemedText> https://github.com/npaul-2</ThemedText>
        </Link> {"\n"} 
      </ThemedText>

      <ThemedText style>
        LinkedIn: 
        <Link href="https://www.linkedin.com/in/nebo-paul-822649324/"
           style={styles.link}>
                <ThemedText> https://www.linkedin.com/in/nebo-paul-822649324/</ThemedText>
        </Link> {"\n"} 
      </ThemedText>

      <Spacer></Spacer>

    </ThemedView>
    </ScrollView>
    <Footer></Footer>
    </ThemedView>

  )
}

export default Contact
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: 'center'
  },
  link: {
    marginVertical: 7,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    color: "blue",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center", 
    justifyContent: "center",
  },
})