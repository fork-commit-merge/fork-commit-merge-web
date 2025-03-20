import { connectToDB } from './db';

export async function getTopThreeUsersFromDb() {
  try {
    const { db } = await connectToDB();
    const data = await db.collection('topThreeUsers').find().toArray();
    return data;
  } catch (error) {
    console.error('DB Error:', error);
    return null;
  }
}

export async function storeTopThreeUsersInDb(data: any[]) {
  try {
    const { db } = await connectToDB();

    // First, clear existing data
    await db.collection('topThreeUsers').deleteMany({});

    // Then insert new data with timestamp
    await db.collection('topThreeUsers').insertMany(
      data.map(user => ({
        ...user,
        timestamp: new Date(),
      }))
    );
  } catch (error) {
    console.error('DB Storage Error:', error);
    throw error;
  }
}

