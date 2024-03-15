import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from '../context/ThemeContext';
import { colors } from '../config/theme';

const TermsNConditionScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const ActiveColor = colors[theme.mode];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ActiveColor.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: ActiveColor.background,
      paddingBottom: 18
    },
    backButton: {
      marginLeft: 15,
      marginTop: 20,
      color: ActiveColor.icon,
    },
    title: {
      textAlign: 'center',
      flex: 1,
      marginTop: 20,
      fontSize: 18,
      fontWeight: '700',
      marginRight: 15,
      color: ActiveColor.text,
      textAlign: 'center'
    },
    contentContainer: {
      backgroundColor: ActiveColor.background2,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 20,
      paddingVertical: 25,
    },
    sectionTitle: {
      fontSize: 15,
      fontFamily: 'Montserrat-Regular',
      color: ActiveColor.text,
      marginBottom: 5,
      marginLeft: 20,
    },
    sectionText: {
      fontSize: 14,
      fontFamily: 'Montserrat-Regular',
      color: ActiveColor.text,
      marginLeft: 20,
      marginRight: 15
    },
    agreeBox: {
      marginTop: 10,
      alignItems: 'center',
      alignSelf:"center",
      height: 40,
      width: 370,
      backgroundColor: '#5DBB63',
      borderRadius: 15,
      marginBottom: 12,
    },
    agreeBoxLabel: {
      fontSize: 17,
      color: '#FFFFFF',
      fontWeight: 'bold',
      margin: 7,
    },
    line: {
      margin: 15,
      flexDirection: "row",
      height: 1.5,
      backgroundColor: ActiveColor.text,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
          <AntDesign
            name='left'
            size={25}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Terms & Conditions</Text>
      </View>

      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Terms & Conditions</Text>
          <View style={styles.line} />
          <View>
            <Text style={styles.sectionText}>
              Welcome to the Terms and Conditions of Use for the Split Bill Application. These terms and conditions govern your access to and use of the Split Bill Application. By accessing or using the application, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use the application.
            </Text>
            <Text style={styles.sectionText}>1. Use of the Application</Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>1.1. The Split Bill Application is intended for use in facilitating fair and equitable splitting of bills among users. Users are expected to use the application only for legitimate transactions and in compliance with applicable laws.
            </Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>1.2. You may not use the Split Bill Application for any illegal or unauthorized purpose, including but not limited to money laundering, fraud, or other unlawful activities.
            </Text>
            <Text style={styles.sectionText}>2. Account Registration and Security</Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>2.1. In order to use certain features of the Split Bill Application, you may be required to register for an account. You agree to provide accurate and complete information during the registration process.
            </Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>2.2. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
            </Text>
            <Text style={styles.sectionText}>3. Transactions and Payments</Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>3.1. All transactions made through the Split Bill Application must be conducted in good faith. Users are responsible for the accuracy of the payment information they input.
            </Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>3.2. Once a payment transaction is confirmed, it cannot be reversed unless there is a technical error that can be verified by our support team.
            </Text>
            <Text style={styles.sectionText}>4. Intellectual Property Rights</Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>4.1. The Split Bill Application and its content, including but not limited to text, graphics, logos, and images, are the property of the application owner or its licensors and are protected by copyright and other intellectual property laws.
            </Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>4.2. You may not modify, reproduce, distribute, or create derivative works based on the content of the Split Bill Application without prior written consent from the owner.
            </Text>
            <Text style={styles.sectionText}>5. Limitation of Liability</Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>5.1. The Split Bill Application is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding the operation or availability of the application.
            </Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>5.2. In no event shall the application owner be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the Split Bill Application.
            </Text>
            <Text style={styles.sectionText}>6. Changes to Terms and Conditions</Text>
            <Text style={[styles.sectionText, { marginLeft: 40 }]}>6.1. We reserve the right to modify or update these terms and conditions at any time without prior notice. Any changes will be effective immediately upon posting to the application.
            </Text>
            <Text style={styles.sectionText}>By using the Split Bill Application, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree to these terms, please refrain from using the application. Thank you for using the Split Bill Application!</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("BottomTab")}
        style={styles.agreeBox}
      >
        <Text style={styles.agreeBoxLabel}>You've Agreed to The Terms & Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermsNConditionScreen;

