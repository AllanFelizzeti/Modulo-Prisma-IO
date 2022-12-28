-- CreateTable
CREATE TABLE `CoursesModules` (
    `id` VARCHAR(191) NOT NULL,
    `fk_id_course` VARCHAR(191) NOT NULL,
    `fk_id_module` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CoursesModules` ADD CONSTRAINT `CoursesModules_fk_id_course_fkey` FOREIGN KEY (`fk_id_course`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CoursesModules` ADD CONSTRAINT `CoursesModules_fk_id_module_fkey` FOREIGN KEY (`fk_id_module`) REFERENCES `modules`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
