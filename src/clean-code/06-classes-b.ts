(() => {

    //No aplicando el principio responsabilidad unica

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
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserProps) {
            super({name, gender, birthdate});

            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(): boolean {

            return true;
        }


    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string; 
        gender: Gender; 
        birthdate: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps) {
            super({email, role, name, gender, birthdate})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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