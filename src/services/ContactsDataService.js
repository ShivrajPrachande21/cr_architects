import AppDataService from './AppDataService';

const COMMON_BASE = 'contacts';

export default class ContactsDataService {
  static async createContactRequest(data) {
    return AppDataService.post(COMMON_BASE, data, { isPublic: true });
  }

  static async getContacts(params = {}) {
    return AppDataService.get(COMMON_BASE, { params, isPublic: true });
  }
}
