/* eslint-disable */
'use server';

import { logToMongo } from '@/utils/logger';

export async function createLog(collection: string, data: any) {
  try {
    await logToMongo(collection, data);
    return { success: true };
  } catch (error) {
    console.error('Erro ao criar log:', error);
    return { success: false, error: 'Erro ao criar log' };
  }
} 