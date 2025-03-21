import { connectToDB } from './db';

export async function getTopUsersFromDb() {
  try {
    const { db } = await connectToDB();
    const data = await db.collection('topUsers').find().toArray();
    return data.length > 0 ? data : null;
  } catch (error) {
    console.error('DB Error:', error);
    return null;
  }
}

export async function storeTopUsersInDb(data: any[]) {
  try {
    const { db } = await connectToDB();
    await db.collection('topUsers').deleteMany({});
    await db.collection('topUsers').insertMany(
      data.map(user => ({
        ...user,
        timestamp: new Date()
      }))
    );
  } catch (error) {
    console.error('DB Storage Error:', error);
    throw error;
  }
}

export async function getTopThreeUsersFromDb() {
  try {
    const { db } = await connectToDB();
    const data = await db.collection('topThreeUsers').find().toArray();
    return data.length > 0 ? data : null;
  } catch (error) {
    console.error('DB Error:', error);
    return null;
  }
}

export async function storeTopThreeUsersInDb(data: any[]) {
  try {
    const { db } = await connectToDB();
    await db.collection('topThreeUsers').deleteMany({});
    await db.collection('topThreeUsers').insertMany(
      data.map(user => ({
        ...user,
        timestamp: new Date()
      }))
    );
  } catch (error) {
    console.error('DB Storage Error:', error);
    throw error;
  }
}



