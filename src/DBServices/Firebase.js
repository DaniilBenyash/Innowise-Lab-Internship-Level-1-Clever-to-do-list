import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export class FirebaseClass {
    constructor(config) {
        this.config = JSON.parse(config)
    }

    getDB() {
        this.app = initializeApp(this.config);
        getDatabase(this.app);
    }
}