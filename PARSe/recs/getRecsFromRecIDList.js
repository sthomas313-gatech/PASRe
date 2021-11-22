import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import { getRec } from './getRec';
import { mapAsync } from '../util';
import { populateRecs } from './populateRecs';

export const getRecsFromRecIDList = async (recIDList) => {

    const recs = await mapAsync(recIDList, async (recID) => {
        return await getRec(recID);
    });
    // console.log(`getRecsFromRecIDList, recs: ${JSON.stringify(recs, undefined, 2)}`);
    const populatedRecs = await populateRecs(recs);
    // console.log(`getRecsFromRecIDList, populatedRecs: ${JSON.stringify(populatedRecs, undefined, 2)}`);
    return populatedRecs;
}