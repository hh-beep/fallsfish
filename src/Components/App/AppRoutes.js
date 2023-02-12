/*  Basics Imports  */
import React from 'react';

/*  Navigation  */
import {  createBottomTabNavigator  } from '@react-navigation/bottom-tabs';

/*  Components */
import Like from './Like/Like';
import Date from './Date/Date';
import Home from './Home/Home';
import Maps from './Maps/Maps';
import User from './User/User';

/*  Icons  */
import FeatherIcon from "react-native-vector-icons/Feather";

/*  Style  */
import AppRoutes_Style from './AppRoutes_Style';





const style = AppRoutes_Style();





const AppRoutes = () => {
  
  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator
      screenOptions={ ({  route  }) => ({
        tabBarIcon: ({  focused, color  }) => {
          var iconName;
          var iconSize = focused ? 40 : 30
          var routeName = route.name;

          switch (  routeName  ) {
            case "Like":
              iconName = "heart"
              break
            case "Date":
              iconName = "calendar"
              break
            case "Home":
              iconName = "home"
              break
            case "Maps":
              iconName = "map-pin"
              break
            case "User":
              iconName = "user"
              break
            default:
              iconName = "alert-triangle"
              break
          }

          return <FeatherIcon name={  iconName  } color={  color  } size={  iconSize  } />
        },


        headerShown: false,
        tabBarShowLabel: false,


        tabBarActiveTintColor: "#E76567",
        tabBarInactiveTintColor: "#072D16",


        tabBarActiveBackgroundColor: "#F5FCEB",
        tabBarInactiveBackgroundColor: "#F5FCEB",


        tabBarStyle: style.TabBar 
      })}


      initialRouteName="Home"
    >





      <Tab.Screen 
        name="Like"
        component={  Like  }
      />

      <Tab.Screen 
        name="Date"
        component={  Date  }
      />

      <Tab.Screen 
        name="Home"
        component={  Home  }
      />

      <Tab.Screen 
        name="Maps"
        component={  Maps  }
      />

      <Tab.Screen 
        name="User"
        component={  User  }
      />





    </Tab.Navigator>
  )
} 

export default AppRoutes;