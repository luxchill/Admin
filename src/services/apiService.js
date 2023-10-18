import axios from '../utils/axiosCustomize'; //import file customize thay vì axios mặc định

// post data
const postCreatNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('username', username);
  data.append('role', role);
  data.append('userImage', image);

  return axios.post('api/v1/participant', data); // đường link này sẽ tự nối chuỗi với localhost ở file customize
};

// get data
const getAllUser = () => {
  return axios.get('api/v1/participant/all');
};

// update data
const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append('id', id);
  data.append('username', username);
  data.append('role', role);
  data.append('userImage', image);

  return axios.put('api/v1/participant', data);
};

const deleteUser = (id) => {
  return axios.delete('api/v1/participant', { data: { id: id } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
  return axios.post(`api/v1/login`, {
    email,
    password,
    delay: 1000
  }); //set delay khi req login
};

const postRegister = (username, email, password) => {
  return axios.post('api/v1/register', { username, email, password });
};

const getQuizByUser = () => {
  return axios.get('api/v1/quiz-by-participant');
};

const getDataQuiz = (id) => {
  return axios.get(`api/v1/questions-by-quiz?quizId=${id}`);
};

const postSubmitQuiz = (data) => {
  // console.log({...data})
  return axios.post('api/v1/quiz-submit', { ...data });
};

const postCreateNewQuiz = (description, name, difficulty, image) => {
  const data = new FormData();
  data.append('description', description);
  data.append('name', name);
  data.append('difficulty', difficulty);
  data.append('quizImage', image);
  return axios.post('api/v1/quiz', data);
};

const getAllQuizForAdmin = () => {
  return axios.get('api/v1/quiz/all');
};

const putUpdateQuiz = (id, name, description, difficulty, image) => {
  const data = new FormData();
  data.append('id', id);
  data.append('description', description);
  data.append('name', name);
  data.append('difficulty', difficulty);
  data.append('quizImage', image);

  return axios.put('api/v1/quiz', data);
};

const deleteQuiz = (id) => {
  return axios.delete(`api/v1/quiz/${id}`);
};

const postCreateNewQuestionForQuiz = (quiz_id, description, questionImage) => {
  // kiểu form data
  const data = new FormData();
  data.append('quiz_id', quiz_id);
  data.append('description', description);
  data.append('questionImage', questionImage);

  return axios.post('api/v1/question', data);
};

const postCreateNewAnswerForQuestion = (description, correct_answer, question_id) => {
  // kiểu x-www-form-urlencoded
  return axios.post('api/v1/answer', {
    description,
    correct_answer,
    question_id
  });
};

const postAssignQuizz = (quizId, userId) => {
  return axios.post('api/v1/quiz-assign-to-user', {
    quizId,
    userId
  });
};

const getQuizWithQA = (quizId) => {
  return axios.get(`api/v1/quiz-with-qa/${quizId}`);
};

const postUpsertQA = (data) => {
  return axios.post('api/v1/quiz-upsert-qa', { ...data });
};

const logout = (email, refresh_token) => {
  return axios.post('api/v1/logout', { email, refresh_token });
};

const getOverview = () => {
  return axios.get('api/v1/overview');
};

export {
  postCreatNewUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getDataQuiz,
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizForAdmin,
  putUpdateQuiz,
  deleteQuiz,
  postCreateNewQuestionForQuiz,
  postCreateNewAnswerForQuestion,
  postAssignQuizz,
  getQuizWithQA,
  postUpsertQA,
  logout,
  getOverview
};
