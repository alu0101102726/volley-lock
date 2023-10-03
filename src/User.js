export class User {

    constructor(id, name, email, photo, voted = false, votes = {}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.photo = photo;
        this.voted = voted;
        this.votes = votes;
    }

    get id() {
        return this.id;
    }

    get name() {
        return this.name;
    }

    get email() {
        return this.email;
    }

    get photo() {
        return this.photo;
    }

    get voted() {
        return this.voted;
    }

    get votes() {
        return this.votes;
    }

    id(newId) {
        this.id = newId;
    }

    name(newName) {
        this.name = newName;
    }

    email(newEmail) {
       this.email = newEmail;
    }

    photo(newPhoto) {
        this.photo = newPhoto;
    }

    voted(newVoted) {
        this.voted = newVoted;
    }

    votes(newVotes) {
        this.votes = newVotes;
    }

}

export const userConverter = {

    toFirestore: (user) => {
        return {
            id: user.id,
            name :user.name,
            email: user.email,
            photo: user.photo,
            voted: user.voted,
            votes: user.votes
            };
    },

    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.id, data.name, data.email, data.photo, data.voted, data.votes);
    }

}