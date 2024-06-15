import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private apiUrl = 'https://libretranslate.de/translate';

  async translateText(text: string, targetLang: string): Promise<string> {
    try {
      const response = await axios.post(this.apiUrl, {
        q: text,
        source: 'en',
        target: targetLang,
        format: 'text'
      });
      return response.data.translatedText;
    } catch (err) {
      console.error('Error translating text:', err);
      return text; // retourner le texte original si la traduction échoue
    }
  }
}
