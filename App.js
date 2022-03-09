import React, {useState} from 'react'
import { View, Text,StatusBar, Image, Dimensions, StyleSheet, Pressable } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
const {width, height} = Dimensions.get('window')
import { Ionicons } from '@expo/vector-icons'; 



const App = () => {
    const [focus, setFocus] = useState({
        news: true,
        explore: false,
        characters: false,
    })
    const [footerFocus, setFooterFocus] = useState({
        home: true,
        social: false,
        rank: false,
    })

    const focusCategory = (ctg) => {
        switch (ctg) {
            case 'news':
                return setFocus({news: true,explore: false,characters: false})
            case 'explore':
                return setFocus({news: false,explore: true,characters: false})
            case 'characters':
                return setFocus({news: false,explore: false,characters: true})
        }
    }

    const focusFooter = (ctg) => {
        switch (ctg) {
            case 'home':
                return setFooterFocus({home: true,social: false,rank: false})
            case 'social':
                return setFooterFocus({home: false,social: true,rank: false})
            case 'rank':
                return setFooterFocus({home: false,social: false,rank: true})
        }
    }
    return (
<View style={{flex: 1, }}>
    <LinearGradient 
        style={{flex: 1,}} 
        colors={['rgba(24, 86, 102,0.7)', 'rgba(163, 173, 182,0.3)']}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 0.6}}
    >

    {/* header container */}
    <View style={{paddingHorizontal: 20}}>

        {/* NavBar*/}
        <View style={style.navBar}>
            <View style={{width: 125}}>
                <Ionicons name="chevron-back-outline" size={30} color="black" />
            </View>
            <View>
                <Text style={{fontSize: 25}}>Home</Text>
            </View>
        </View>
        {/* NavBar*/}

        {/* Header*/}
        <View style={{height: 60, paddingTop: 20,}}>
            <Text style={{fontWeight: 'bold',}}>Hello,</Text>
            <Text style={{fontSize: 20}}>
                Hussain <Text style={{color: 'white', borderWidth: 2}}>Pena</Text>
            </Text>
        </View>
        {/* Header*/}

    </View>
    {/* header container */}

    {/* header photo */}
    <View style={{alignItems: 'center', maxHeight: 200}}>
        <Image 
            source={require('./images/header.png')}
            style={{height: 250, width: 360,}}
        />
    </View>
    {/* header photo */}

    {/* Categories */}
    <View style={style.categories}>
        <Pressable 
            onPress={() => focusCategory('news')} 
            style={{...style.center, flex: 1, height: '100%'}}>
            <Text style={{fontSize: focus.news ? 20 : 18}}>News</Text>
            {focus.news ? (
                <View style={[{width: '40%'}, style.smallBar]} />
            ): null}
        </Pressable>
        <Pressable 
            onPress={() => focusCategory('explore')} 
            style={{...style.center, flex: 1, height: '100%'}}>
            <Text style={{fontSize: focus.explore ? 20 : 18}}>Explore</Text>
            {focus.explore ? (
                <View style={[{width: '60%'}, style.smallBar]} />
            ): null}
        </Pressable>
        <Pressable 
            onPress={() => focusCategory('characters')} 
            style={{...style.center, flex: 1, height: '100%'}}>
            <Text style={{fontSize: focus.characters ? 20 : 18}}>Characters</Text>
            {focus.characters ? (
                <View style={[{width: '70%'}, style.smallBar]} />
            ): null}
        </Pressable>
    </View>
    {/* Categories */}

    {/* news */} 
    {focus.news ? (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Image
                style={{width: width - 20, height: 350}}
                source={require('./images/group2.png')}
            />
        </View>
    ): (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Image
                style={{width: width - 20, height: 350}}
                source={require('./images/group2.png')}
            />
        </View>
    )}
    {/* news */} 
    
    {/* footer */}
    <View style={{flexDirection: 'row', height: 60}}>
        <View style={{flexDirection: 'row', marginLeft: 40, width: '70%'}}>
            <Pressable 
                onPress={() => focusFooter('home')} 
                style={{width: '33.333%', ...style.center}}>
                <Text style={{fontSize: footerFocus.home ? 20 : 15}}>Home</Text>
                {footerFocus.home ? (
                    <View style={[style.smallCircle]}/>
                ): null}
            </Pressable>
            <Pressable 
                onPress={() => focusFooter('social')} 
                style={{width: '33.333%', ...style.center}}>
                <Text style={{fontSize: footerFocus.social ? 20 : 15}}>Social</Text>
                {footerFocus.social ? (
                    <View style={[style.smallCircle]}/>
                ): null}
            </Pressable>
            <Pressable 
                onPress={() => focusFooter('rank')} 
                style={{width: '33.333%', ...style.center}}>
                <Text style={{fontSize: footerFocus.rank ? 20 : 15}}>Rank</Text>
                {footerFocus.rank ? (
                    <View style={[style.smallCircle]}/>
                ): null}
            </Pressable>
        </View>

        <View style={[{...style.center}, style.cornerBtn]}>
            <Image 
            style={{width:40, height: 40}}
            source={require('./images/group5.png')} />
        </View>
    </View>
    </LinearGradient>
</View>
    )
}

const style = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    navBar: {
        paddingTop: StatusBar.currentHeight +10, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    categories: {
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row', 
        marginHorizontal: 10, 
        marginBottom: 10
    },
    smallBar: {
        backgroundColor: '#185666', 
        borderRadius: 30, 
        marginTop: 5,
        height: 6
    },
    smallCircle: {
        width: 9, 
        height: 9, 
        backgroundColor: 'black', 
        borderRadius: 50, 
        marginTop: 2
    },
    cornerBtn: {
        borderTopLeftRadius: 25, 
        backgroundColor: '#185666', 
        width: '20%'
    }
})

export default App
