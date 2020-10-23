import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createDonators1603213296417 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "donators",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar", 
          },
          {
            name: "cpf",
            type: "number",
          },
          {
            name: "rg",
            type: "number",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "smoker",
            type: "boolean",
          },
          {
            name: "genre",
            type: "varchar", 
          },
          {
            name: "emailRelative",
            type: "varchar",
          },
          {
            name: "disease",
            type: "text",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("donators");
  }
}
