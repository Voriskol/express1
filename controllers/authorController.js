const Author = require("../models/author");
const Book = require("../models/book");

// Показать список всех авторов.
exports.author_list = async function (req, res, next) {
  try {
    const list_authors = await Author.find()
      .sort([["family_name", "ascending"]])
      .exec();
    res.render("author_list", {
      title: "Author List",
      author_list: list_authors,
    });
  } catch (err) {
    return next(err);
  }
};

// Показать подробную страницу для данного автора.
exports.author_detail = async function (req, res) {
  try {
    const [author, author_books] = await Promise.all([
      Author.findById(req.params.id).exec(),
      Book.find({ author: req.params.id }, "title summary").exec(),
    ]);
    if (author === null) {
      const err = new Error("Author not found");
      return next(err);
    }
    res.render("author_detail", {
      title: "Author Deatil",
      author,
      author_books: author_books,
    });
  } catch (err) {
    return next(err);
  }
};

// Показать форму создания автора по запросу GET.
exports.author_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Создать автора по запросу POST.
exports.author_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Показать форму удаления автора по запросу GET.
exports.author_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Удалить автора по запросу POST.
exports.author_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Показать форму обновления автора по запросу GET.
exports.author_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Обновить автора по запросу POST.
exports.author_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update POST");
};
