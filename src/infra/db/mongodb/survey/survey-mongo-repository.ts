import { AddSurveyModel, AddSurveyRepository } from '../../../../data/usecases/add-survey/db-add-survey-protocols'
import { LoadSurveysRepository, SurveyModel } from '../../../../data/usecases/load-surveys/db-load-survey-protocols'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getConllection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getConllection('surveys')
    const surveys: SurveyModel[] = await surveyCollection.find().toArray()
    return surveys
  }
}
