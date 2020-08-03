import React from 'react';
import { useState, useEffect, useReducer } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonLoading, IonList, IonTextarea,  IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { RouteComponentProps } from 'react-router';
import useLocalStorage from '../components/LocalStorage'

interface CartPageProps extends RouteComponentProps<{
  id: string;
}> { }

interface CartItem { 
  id: string
  name?: string
  description?: string
  price?: number
  qty:number
}


interface Dictionary<T> {
  [Key: string]: T;
}

type Cart = Dictionary<CartItem>



const addItem = function(id:string, cart:Cart):Cart { // TODO:fixme 
  if ((id != null) && (id.length > 0)) {
    if ( cart[id] == null) {
      cart[id] = { id:id, qty:1 };
    } else {
      cart[id].qty += 1 
    }
  }
  return cart
}

function allItems(cart:Cart): CartItem[] { 
  let res = new Array<CartItem>()
  // TODO: fixme
  return res
}

const Tab3: React.FC<CartPageProps> = ({match}) => {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [ cart, setCart  ] = useLocalStorage<Cart>('cart', {});

  useEffect(() => { 
    // TODO: fixme 
  }, [cart])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Chart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Chart</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Loading...'}
        />
        <IonList>
          {
            // TODO:fixme
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
