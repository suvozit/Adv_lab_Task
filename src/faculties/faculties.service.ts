import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dtos/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {}

  async createFaculty(facultyData: CreateFacultyDto) {
    const faculty = this.facultyRepository.create(facultyData);

    const result = await this.facultyRepository.save(faculty);

    return {
      message: 'Faculty created successfully',
      data: result,
    };
  }
}