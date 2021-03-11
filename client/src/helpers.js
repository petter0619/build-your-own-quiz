export const shuffleArray = array => {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
}

export const formatInputString = string => string.trim().toLowerCase();

export const getQuizData = async id => {
    const response = await fetch(`http://localhost:3001/api/quiz/${id}`);
    const data = await response.json();
    return data;
}

export const updateParticipantResult = async (participantResultObj, id) => {
    const rawResponse = await fetch(`http://localhost:3001/api/quiz/${id}/results`, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(participantResultObj),
    });
    const { quizId } = await rawResponse.json();
    return quizId;
}

export const createQuizFetch = async quizObj => {
    const rawResponse = await fetch('http://localhost:3001/api/quiz/', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quizObj),
    });
    const { quizId } = await rawResponse.json();
    return quizId;
}
