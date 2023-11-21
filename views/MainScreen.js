import React,{useState,useRef} from 'react';
import { View,Text,ScrollView, Pressable,StyleSheet} from 'react-native';
import styles from '../styles/mainscreen.js';

const MainScreen = () => {

    const [value,setValue] = useState('0');
    const [bracketOpen,setbracketOpen] = useState(false);
    const scrollViewRef = useRef();


    const handlePress = (val)=>{
        console.log('pressed', val);

        // logic for All Clear..

        if(val == 'C'){
            setValue('0');
        }
        else if(val == '='){
            try {
                if((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length){  // is number of brackets will same then the forward calculation will done.
                    //console.log('equal');
                    if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.'){
                        setValue(`${eval(value.replace('()','(0)').slice(0,-1))}`)
                    }
                    else{
                        setValue(`${eval(value.replace('()','(0)'))}`)
                    }
                }
                // else{
                //     console.log('unEqual');
                // }
            } catch(e){
                setValue('Formate Error')
            }
        }

        else if(val == '()'){
            if(value == '0'){
                setValue('(');
                setbracketOpen(true);
            }
            else if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.'){
                setValue(value+'(');
                setbracketOpen(true);
            }
            else{
                if(bracketOpen == true){
                    setValue(value+')')
                    setbracketOpen(false);
                }
                else{
                    setValue(value+'(');
                    setbracketOpen(true);
                }
            }
        }

        else if(val == 'back'){
            setValue(value.slice(0,-1));
        }

        else if(value == 'Formate Error'){
            setValue(val);
        }


        else{
            if(value == '0'){   
                if(isNaN(val)){      // for the concatenation of airthmatic operators..
                    setValue(value+val);   
                }
                else{
                    setValue(val);
                }
            }
            else if(isNaN(val)){  // not repeating the symboles again and again.
                if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.'){
                    setValue(value.slice(0,-1)+val);
                }
                else{
                    setValue(value+val);
                }
            }
            else{
                setValue(value+val);
            }
        }
    }

  return (

    // here i have used scrollViewRef for having auto scroll when the size if the number is larger.

    <View style={styles.main_Screen}>
        <ScrollView style={styles.main_screen_display} ref={scrollViewRef} onContentSizeChange={()=>scrollViewRef.current.scrollToEnd({animated:true})}>
            <Text style = {styles.main_screen_display_text}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</Text>
        </ScrollView>
        <View style={styles.main_screen_keypad}>
            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handlePress('C')}>
                    <View style={styles.btn1_outer}>
                        <Text style={[styles.bg1_button]}>&#67;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('()')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>&#40;&#41;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('%')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>&#37;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('/')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>&#247;</Text>
                    </View>
                </Pressable>
            </View>

            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handlePress('7')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#55;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('8')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#56;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('9')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#57;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('*')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>&#215;</Text>
                    </View>
                </Pressable>
            </View>

            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handlePress('4')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#52;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('5')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#53;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('6')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#54;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('-')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>&#8722;</Text>
                    </View>
                </Pressable>
            </View>

            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handlePress('1')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#49;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('2')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#50;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('3')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#51;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('+')}>
                    <View style={styles.btn2_outer}>
                        <Text style={styles.bg2_button}>&#43;</Text>
                    </View>
                </Pressable>
            </View>

            <View style={styles.main_screen_keypad_row}>
                <Pressable onPress={()=>handlePress('0')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#48;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('.')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#x2022;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('back')}>
                    <View style={styles.btn_outer}>
                        <Text style={styles.bg_button}>&#8592;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('=')}>
                    <View style={[styles.btn2_outer,Inlinestyles.equalsBackround]}>
                        <Text style={[styles.bg2_button,Inlinestyles.textColor]}>&#61;</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

const Inlinestyles = StyleSheet.create({
    textColor:{
        color:'white',
    },
    equalsBackround:{
        backgroundColor:'#34ACBC',
    }
})

export default MainScreen;