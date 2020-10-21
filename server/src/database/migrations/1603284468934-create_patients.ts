import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPatients1603284468934 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "patients",
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
            name: "orgaoNecessitado",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("patients");
  }
}
