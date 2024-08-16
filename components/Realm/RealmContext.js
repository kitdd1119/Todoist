import { createContext, useContext, useEffect, useState } from 'react';
import Realm from 'realm';
import Schedule from './Schedules';

const RealmContext = createContext();

export const RealmProvider = ({ children }) => {
  const [realm, setRealm] = useState(null);

  useEffect(() => {
    const openRealm = async () => {
      try {
        const realmInstance = await Realm.open({ schema: [Schedule] });
        setRealm(realmInstance);
      } catch (error) {
        console.error('Realm 열기 시 에러 발생: ', error);
      }
    };

    openRealm();

    return () => {
      if (realm) {
        realm.close();
      }
    };
  }, []);

  return (
    <RealmContext.Provider value={realm}>
      {children}
    </RealmContext.Provider>
  );
};

export const useRealm = () => {
  return useContext(RealmContext);
};
