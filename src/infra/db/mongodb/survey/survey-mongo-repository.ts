import { AddSurveyModel, AddSurveyRepository } from '@/data/usecases/survey/add-survey/db-add-survey-protocols'
import { LoadSurveyByIdRepository } from '@/data/usecases/survey/load-survey-by-id/db-load-survey-by-id-protocols'
import { LoadSurveysRepository, SurveyModel } from '@/data/usecases/survey/load-surveys/db-load-survey-protocols'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { ObjectId } from 'bson'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository, LoadSurveyByIdRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getConllection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getConllection('surveys')
    const surveys = await surveyCollection.find().toArray()
    return MongoHelper.mapCollection(surveys)
  }

  async loadById (id: string): Promise<SurveyModel> {
    const surveyCollection = await MongoHelper.getConllection('surveys')
    const survey = await surveyCollection.findOne({ _id: new ObjectId(id) })
    return survey && MongoHelper.map(survey)
  }
}
