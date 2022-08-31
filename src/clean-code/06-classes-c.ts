(() => {

    //Aplicando el principio responsabilidad unica
    // Priorizar la composicion frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender
            this.name = name;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({
            email,
            role
        }: UserProps) {

            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(): boolean {

            return true;
        }

    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder
        }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsPros {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string; 
        gender: Gender; 
        birthdate: Date;
    }

    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({  
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsPros) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder })
        }

    }

    const userSettings = new UserSettings({
        workingDirectory: 'usr/home',
        lastOpenFolder: '/home',
        email: 'oaldaz@gmail.com',
        role: 'Admin',
        name: 'oscar',
        gender: 'M',
        birthdate: new Date(1980, 1, 1)
    })

    console.log(userSettings)
})()