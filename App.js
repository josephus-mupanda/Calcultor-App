
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleNum = (num) => {
    if (num === '.') {
      // Check if num1 or num2 already contains a decimal point
      if (!operator && !num1.includes('.')) {
        setNum1(num1 + '.');
        setCalculation(num1 + '.');
      } else if (operator && !num2.includes('.')) {
        setNum2(num2 + '.');
        setCalculation(num1 + operator + num2 + '.');
      }
    } else {
      if (!operator) {
        setNum1(num1 + num.toString());
        setCalculation(num1 + num.toString());
      } else {
        setNum2(num2 + num.toString());
        setCalculation(num1 + operator + num2 + num.toString());
      }
    }
  };

  // const handleNum = (num) => {
  //   if (!operator) {
  //     setNum1(num1 + num.toString());
  //     setCalculation(num1 + num.toString());
  //   } else {
  //     setNum2(num2 + num.toString());
  //     setCalculation(num1 + operator + num2 + num.toString());
  //   }
  // };

  const handleOperator = (op) => {
    if (num1) {
      setOperator(op);
      setCalculation(num1 + op);
    }
  };

  const handleResult = () => {
    let res;
    switch (operator) {
      case '+':
        res = Number(num1) + Number(num2);
        break;
      case '-':
        res = Number(num1) - Number(num2);
        break;
      case '*':
        res = Number(num1) * Number(num2);
        break;
      case '/':
        res = Number(num1) / Number(num2);
        break;
      case '%':
        res = Number(num1) % Number(num2);
        break;

    }
    setResult(res.toString());
    setNum1('');
    setNum2('');
    setOperator('');
    setCalculation(num1 + operator + num2 + '=' + res.toString());
  };

  const handleClearAll = () => {
    setResult('');
    setNum1('');
    setNum2('');
    setOperator('');
    setCalculation('');
  };

  const handleClear = () => {
    if (num2) {
      // Delete the last digit of num2
      setNum2(num2.slice(0, -1));
      setCalculation(num1 + operator + num2.slice(0, -1));
    } else if (operator) {
      // Clear the operator
      setOperator('');
      setCalculation(num1);
    } else if (num1) {
      // Delete the last digit of num1
      setNum1(num1.slice(0, -1));
      setCalculation(num1.slice(0, -1));
    }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    monitor: {
      width: '100%',
      height: 250,
      backgroundColor: '#444',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingRight: 20,
      paddingBottom: 50,
      // margin: 8,
      // borderRadius: 24,
    },
    monitorText: {
      color: '#fff',
      fontSize: 50,
    },
    row: {
      flexDirection: 'row',
    },
    button: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      margin: 8,
      borderRadius: 24,
      width: 72,
      height: 72,
  
    },
    buttonText: {
      fontSize: 30,
    },
    operatorButton: {
      // backgroundColor: '#f0ad4e',
      backgroundColor: '#4B5EFC',
      color: '#FFFFFF'
    },
    clearAllButton: {
      backgroundColor: '#ac2925',
      color: '#FFFFFF'
    },
    clearButton: {
    
      backgroundColor: '#ac2925',
      color: '#FFFFFF'
    
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.monitor}>
        <Text style={styles.monitorText}>{num1} {operator} {num2} {operator && num2 ? '=' : ''}</Text>
        <Text style={[styles.monitorText, styles.resultText]}>{result}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.clearAllButton]} onPress={handleClearAll}>
          <Text style={[styles.buttonText, styles.clearAllButton]}>C</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={() => handleNum('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity> */}
        
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(4)}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(5)}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(6)}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={[styles.buttonText, styles.clearButton]}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={handleResult}>
          <Text style={[styles.buttonText, styles.operatorButton]}>=</Text>
        </TouchableOpacity>
    
      </View>
    </View>
  );

}