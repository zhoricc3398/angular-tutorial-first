import { NewsService } from "./news.service";
import { dataBase } from './dbArticle';

describe('News Service tests', () => {
  let service: NewsService;

  beforeEach(() => {
    service = new NewsService();
  })

  it('Method getArticles should return database', () => {
    expect(service.getArticles()).toBe(dataBase)
  })

  it('Method getArticlesById should return article by specified id', () => {
    expect(service.getArticleById(1)).toBe(dataBase.find((item) => item.id == 1))
  })

});