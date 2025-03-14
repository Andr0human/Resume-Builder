import { Request, Response } from 'express';
import logger from '../../lib/logger';
import { SystemResponse } from '../../lib/response-handler';
import ResumeService from './Service';
import { IResume } from './entities';

class ResumeController {
  private readonly resumeService: ResumeService;

  constructor() {
    this.resumeService = new ResumeService();
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const fields: string = '-__v';
      const resumeList: IResume[] | null = await this.resumeService.getAll(userId, fields);

      if (!resumeList) {
        new SystemResponse(res, 'No resumes found for the provided userId!', {
          userId,
        }).notFound();
        return;
      }

      logger.info(`resumes list found for userId:${userId}!`);
      new SystemResponse(res, 'Resumes list found!', resumeList).ok();
    } catch (error: unknown) {
      logger.error('error in getAll API', error);

      new SystemResponse(res, 'Error retrieving all resumes.', error).internalServerError();
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { resumeId } = req.params;
      const fields: string = '-__v';
      const resume: IResume | null = await this.resumeService.getById(resumeId, fields);

      if (!resume) {
        new SystemResponse(res, 'No resume found for the provided ID!', {
          resumeId,
        }).notFound();
        return;
      }

      logger.info(`resume with id: ${resumeId} found!`);
      new SystemResponse(res, 'Resume found successfully!', resume).ok();
    } catch (error: unknown) {
      logger.error('error in getById API', error);

      new SystemResponse(res, 'Error retrieving resume by resumeId.', error).internalServerError();
    }
  };

  updateById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { resumeId } = req.params;
      const newResume: IResume = req.body;

      await this.resumeService.updateById(resumeId, newResume);

      logger.info(`resume with id:${resumeId} updated!`);
      new SystemResponse(res, `resume with id:${resumeId} updated!`, newResume).ok();
    } catch (error: unknown) {
      logger.error('error in updateById API', error);

      new SystemResponse(res, 'Error updating resume by resumeId.', error).internalServerError();
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.headers;
      const createdResume: IResume = await this.resumeService.create(
        req.body as IResume,
        userId as string
      );

      logger.info(`resume with id:${(createdResume as any)._id} created!`);
      new SystemResponse(res, 'new resume added!', createdResume).created();
    } catch (error: unknown) {
      logger.error('error in create API', error);

      new SystemResponse(res, 'Error creating new resume.', error).internalServerError();
    }
  };

  deleteById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { resumeId } = req.params;
      await this.resumeService.deleteById(resumeId);

      logger.info(`resume with id:${resumeId} deleted!`);

      new SystemResponse(res, 'Resume deleted successfully!', {
        resumeId,
      }).ok();
    } catch (error: unknown) {
      logger.error('error in deleteById API', error);

      new SystemResponse(res, 'Error deleting resume by resumeId.', error).internalServerError();
    }
  };
}

export default ResumeController;
