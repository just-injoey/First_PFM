import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6', '7Erwin_Cummings-Runolfsdottir97@gmail.com', 'Cathy Lee', 'https://i.imgur.com/YfJQV5z.png?id=9', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('186e3940-c567-4ccd-96d2-f5f380900cb2', '13Mariela28@yahoo.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=15', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('24420f71-fc98-4e3d-9f7c-6e53af1ac60b', '19Mireille.Zemlak@yahoo.com', 'Cathy Lee', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('19903af3-8831-4173-8890-c1418ae57656', '25Wendell.Schulist@yahoo.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=27', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cb76ad3a-1877-46dd-b92a-5d045b5b7300', '31Cleora.Bins@hotmail.com', 'Bob Smith', 'https://i.imgur.com/YfJQV5z.png?id=33', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('9f38a39a-bb0d-479f-a446-355220e835b4', '37Florida.Runolfsson20@hotmail.com', 'Cathy Lee', 'https://i.imgur.com/YfJQV5z.png?id=39', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('702dce64-755a-4c44-afd9-9a272f612da4', '43Willa.Jones@gmail.com', 'Cathy Lee', 'https://i.imgur.com/YfJQV5z.png?id=45', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('24df0528-a9e4-4c38-ace0-036ea645cc20', '49Dwight80@hotmail.com', 'Eva Green', 'https://i.imgur.com/YfJQV5z.png?id=51', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('7123677b-508d-4750-a2ca-776f11a06edf', '55Laisha_Nader@hotmail.com', 'Eva Green', 'https://i.imgur.com/YfJQV5z.png?id=57', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d2bb5348-ad7f-4827-8c84-22d3d80a8347', 'Monthly Summary Available', 'Congratulations Youve achieved your savings goal for this quarter.', 'Finance Manager', '64Stan36@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '7123677b-508d-4750-a2ca-776f11a06edf');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3cadda23-0c89-42ba-b7f8-1917aa63dc53', 'Monthly Summary Available', 'Your monthly financial summary is ready to view.', 'BillPay Assistant', '71Vallie.Lowe@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '24420f71-fc98-4e3d-9f7c-6e53af1ac60b');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('403ed9fa-eb67-4f30-9ebe-dd41a0044671', 'Expense Alert', 'You have exceeded your set budget for dining out this month.', 'Goal Tracker', '78Theron.Blanda59@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9906baf0-7dbe-47a2-bf30-c35b332c3066', 'Monthly Summary Available', 'Learn about new tax deductions applicable for this financial year.', 'Tax Advisor', '85Bertram.Zulauf@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '7123677b-508d-4750-a2ca-776f11a06edf');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('fbcdd50e-3ceb-429d-a8c0-76c70a4cdbde', 'Goal Achievement', 'Your monthly financial summary is ready to view.', 'Tax Advisor', '92Ron_Johnston-Wilderman28@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', 'cb76ad3a-1877-46dd-b92a-5d045b5b7300');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a40a4d10-678d-4be7-a79f-47af7b2069c3', 'Bill Reminder', 'Reminder Your electricity bill is due tomorrow.', 'Tax Advisor', '99Christopher59@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '186e3940-c567-4ccd-96d2-f5f380900cb2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('84d5cef5-1b68-4bdc-baa5-3f062de9383a', 'Tax Benefit Update', 'Congratulations Youve achieved your savings goal for this quarter.', 'Finance Manager', '106Clint_Bayer77@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '19903af3-8831-4173-8890-c1418ae57656');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('499b8038-84aa-4e4f-9dbe-3bb76c41dbec', 'Expense Alert', 'Learn about new tax deductions applicable for this financial year.', 'BillPay Assistant', '113Justina.Sanford69@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '19903af3-8831-4173-8890-c1418ae57656');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c34646a7-9742-44af-b0ec-6fb8c4cb741a', 'Goal Achievement', 'Reminder Your electricity bill is due tomorrow.', 'BillPay Assistant', '120Daniella.Carroll41@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6d8ff5c7-ba45-4de8-83b8-6fa05f1bd0e4', 'Goal Achievement', 'Your monthly financial summary is ready to view.', 'BillPay Assistant', '127Urban68@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "category" ("id", "name", "type") VALUES ('43bea091-0e0e-4261-962c-b5f09218b4d7', 'Entertainment', 'Expense');
INSERT INTO "category" ("id", "name", "type") VALUES ('2c688e5e-fcf3-440c-a164-14acebe4ab82', 'Groceries', 'Expense');
INSERT INTO "category" ("id", "name", "type") VALUES ('c9e76484-942d-4990-bb6c-dad8eafeed2b', 'Travel', 'Expense');
INSERT INTO "category" ("id", "name", "type") VALUES ('bff6036e-909d-47be-82ff-c4fa6c5fabcf', 'Entertainment', 'Expense');
INSERT INTO "category" ("id", "name", "type") VALUES ('bec84dde-7b5d-4dfb-b37e-0d97b509c544', 'Groceries', 'Expense');
INSERT INTO "category" ("id", "name", "type") VALUES ('dc74e474-c195-4dcb-8c21-7fa2ca6337dd', 'Travel', 'Expense');
INSERT INTO "category" ("id", "name", "type") VALUES ('c06d78fd-80a3-4388-9b93-eae45136a22d', 'Entertainment', 'Expense');
INSERT INTO "category" ("id", "name", "type") VALUES ('fd9db865-3d33-4acd-8652-23818047aa0b', 'Groceries', 'Expense');
INSERT INTO "category" ("id", "name", "type") VALUES ('659f2a48-9eed-4673-81d5-1c7d36c82e74', 'Travel', 'Expense');
INSERT INTO "category" ("id", "name", "type") VALUES ('bac6bce0-d323-4edf-993d-61f3589f0e3c', 'Travel', 'Expense');

INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('c6a35e12-33a9-43ec-ae92-d4360da7bff6', 'Vacation Savings', 'Savings', 617, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('5ab0168a-59cc-4c57-af84-00a83b126c15', 'Savings Plus', 'Investment', 712, '19903af3-8831-4173-8890-c1418ae57656');
INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('717bb2e7-cbe1-4aa1-8651-7d181eefa792', 'Vacation Savings', 'Savings', 218, '186e3940-c567-4ccd-96d2-f5f380900cb2');
INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('5788f8c4-c3b6-4431-acf5-551fb8675b56', 'Retirement Account', 'Savings', 285, '186e3940-c567-4ccd-96d2-f5f380900cb2');
INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('c31f0a1e-35ad-470d-bdc3-52335f47b8ee', 'Retirement Account', 'Checking', 917, '9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6');
INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('c87bd25c-a509-427e-aef8-825a9b981a1d', 'Vacation Savings', 'Checking', 541, 'cb76ad3a-1877-46dd-b92a-5d045b5b7300');
INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('4ef7183b-96ff-4233-af69-ff482a735f8a', 'Rainy Day Fund', 'Savings', 741, '186e3940-c567-4ccd-96d2-f5f380900cb2');
INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('febc24a3-054d-4937-9cf8-e2ce55ff178c', 'Rainy Day Fund', 'Savings', 548, '9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6');
INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('22e414ac-7c1c-47e8-a3c4-8fb054674cff', 'Vacation Savings', 'Investment', 879, 'cb76ad3a-1877-46dd-b92a-5d045b5b7300');
INSERT INTO "bank_account" ("id", "accountName", "accountType", "balance", "userId") VALUES ('160fda9d-7f0d-4193-a235-9745a6a9451f', 'Vacation Savings', 'Savings', 893, '19903af3-8831-4173-8890-c1418ae57656');

INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('a378e30b-d4c5-409b-b68b-906410f4ce21', 643, '2023-07-14T16:12:55.487Z', 'Grocery shopping', '24420f71-fc98-4e3d-9f7c-6e53af1ac60b', 'bac6bce0-d323-4edf-993d-61f3589f0e3c');
INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('2c08af19-c725-4a8c-b1f3-92271c1f5591', 900, '2023-06-02T13:53:39.425Z', 'Electronics purchase', '24420f71-fc98-4e3d-9f7c-6e53af1ac60b', 'bec84dde-7b5d-4dfb-b37e-0d97b509c544');
INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('b7fd28ce-5d44-4f75-aac9-6ec0caf42a1f', 874, '2025-04-28T10:58:56.512Z', 'Car repair', '7123677b-508d-4750-a2ca-776f11a06edf', 'bac6bce0-d323-4edf-993d-61f3589f0e3c');
INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('77ebd946-bc11-4983-b3d0-fbaddf1ea63e', 419, '2024-06-08T04:55:17.478Z', 'Dining out', '7123677b-508d-4750-a2ca-776f11a06edf', 'bac6bce0-d323-4edf-993d-61f3589f0e3c');
INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('ba91dd28-2800-4a4e-80e0-8072b0960510', 303, '2024-03-02T09:53:59.280Z', 'Dining out', '19903af3-8831-4173-8890-c1418ae57656', 'bff6036e-909d-47be-82ff-c4fa6c5fabcf');
INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('540e034c-0fe5-40bf-875b-391053724dfc', 602, '2024-07-29T22:01:36.322Z', 'Dining out', '24420f71-fc98-4e3d-9f7c-6e53af1ac60b', 'dc74e474-c195-4dcb-8c21-7fa2ca6337dd');
INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('289f9111-d9d3-4ecc-b0cb-be14888f8f78', 71, '2024-07-26T12:49:08.738Z', 'Monthly gym membership', '24420f71-fc98-4e3d-9f7c-6e53af1ac60b', 'c9e76484-942d-4990-bb6c-dad8eafeed2b');
INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('e5efec67-4ef1-4fca-af51-38ababc40c2f', 218, '2023-09-21T08:20:29.875Z', 'Monthly gym membership', '9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6', 'bff6036e-909d-47be-82ff-c4fa6c5fabcf');
INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('d6fc9f16-68d7-4b35-8813-5518c3c6b68e', 766, '2023-07-01T01:16:38.496Z', 'Grocery shopping', '19903af3-8831-4173-8890-c1418ae57656', 'fd9db865-3d33-4acd-8652-23818047aa0b');
INSERT INTO "expense" ("id", "amount", "date", "description", "userId", "categoryId") VALUES ('62046fc1-ede9-4227-983c-28bc0e1a4dd0', 876, '2024-07-02T19:17:08.508Z', 'Car repair', '186e3940-c567-4ccd-96d2-f5f380900cb2', 'bac6bce0-d323-4edf-993d-61f3589f0e3c');

INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('5e4ac633-6643-4167-97f7-ef9bee1431c9', 527, 292, '2024-04-22T08:18:59.216Z', 'Emergency fund', '186e3940-c567-4ccd-96d2-f5f380900cb2');
INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('868480b4-8458-4506-a374-4d4ba23d8ef1', 444, 325, '2024-06-30T00:18:11.108Z', 'Emergency fund', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('00b33ecc-62ff-4454-803c-af6b9616474b', 278, 323, '2023-11-10T02:56:12.152Z', 'New laptop', '24df0528-a9e4-4c38-ace0-036ea645cc20');
INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('cdea1c0b-3443-4b86-aa08-f4f6928df11e', 895, 306, '2024-07-17T07:55:58.074Z', 'Home renovation', '9f38a39a-bb0d-479f-a446-355220e835b4');
INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('4b92c80f-90fd-4f46-a5be-e24082798047', 825, 386, '2024-12-25T03:33:21.427Z', 'New laptop', '702dce64-755a-4c44-afd9-9a272f612da4');
INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('49ec7ac2-f907-4a00-8719-47510c6e3e58', 588, 621, '2023-09-26T08:04:37.339Z', 'Home renovation', '9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6');
INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('a33df226-1f70-47b6-a70f-a251a5afcb10', 65, 620, '2024-03-29T15:22:30.484Z', 'Emergency fund', '9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6');
INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('31b3fa35-d9c3-4a73-a815-d63fce508c6e', 756, 191, '2023-06-08T10:30:14.145Z', 'Home renovation', '9f38a39a-bb0d-479f-a446-355220e835b4');
INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('af8e10b2-6988-48c1-83fe-a680477f83e6', 164, 696, '2024-03-10T05:07:31.160Z', 'Wedding fund', '19903af3-8831-4173-8890-c1418ae57656');
INSERT INTO "financial_goal" ("id", "targetAmount", "currentAmount", "deadline", "description", "userId") VALUES ('7a9c45a7-f8d7-4f5c-883f-d4b82a425772', 452, 27, '2023-10-04T03:39:25.367Z', 'Home renovation', '186e3940-c567-4ccd-96d2-f5f380900cb2');

INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('9c57b3e7-7d6a-40de-8e24-2c7bc2cb3b0c', 344, '2024-07-19T14:32:07.770Z', true, '702dce64-755a-4c44-afd9-9a272f612da4', 'bec84dde-7b5d-4dfb-b37e-0d97b509c544');
INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('516a4327-2d13-4b6b-b054-9f78c8af2d52', 295, '2023-05-12T10:52:03.112Z', false, '9f38a39a-bb0d-479f-a446-355220e835b4', 'fd9db865-3d33-4acd-8652-23818047aa0b');
INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('1a117535-9cce-484f-9858-128142c18112', 543, '2024-05-24T08:41:54.476Z', true, '9f38a39a-bb0d-479f-a446-355220e835b4', '659f2a48-9eed-4673-81d5-1c7d36c82e74');
INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('71f17720-622b-4c29-a3ee-542396cf1912', 437, '2023-07-08T20:29:46.395Z', true, '9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6', '2c688e5e-fcf3-440c-a164-14acebe4ab82');
INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('922de0c3-c026-4c05-8beb-903e21a14edd', 566, '2023-07-30T15:32:08.754Z', true, '24420f71-fc98-4e3d-9f7c-6e53af1ac60b', 'dc74e474-c195-4dcb-8c21-7fa2ca6337dd');
INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('ceab59a4-e5c4-45b1-8036-a553497ee820', 299, '2023-07-20T02:46:50.056Z', false, '9f38a39a-bb0d-479f-a446-355220e835b4', 'c06d78fd-80a3-4388-9b93-eae45136a22d');
INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('0f50d049-ddd2-45a5-be1c-b8f7311543c0', 662, '2024-11-16T20:03:21.854Z', false, '702dce64-755a-4c44-afd9-9a272f612da4', 'bac6bce0-d323-4edf-993d-61f3589f0e3c');
INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('b8552f35-6785-4154-a7b1-dbbf9e452e90', 290, '2024-02-15T10:09:15.918Z', true, '9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6', 'dc74e474-c195-4dcb-8c21-7fa2ca6337dd');
INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('4f6230a3-1545-4c26-a42b-f44698c6192b', 74, '2023-06-29T02:16:53.303Z', true, '186e3940-c567-4ccd-96d2-f5f380900cb2', '2c688e5e-fcf3-440c-a164-14acebe4ab82');
INSERT INTO "bill" ("id", "amountDue", "dueDate", "isPaid", "userId", "categoryId") VALUES ('d06df13e-0291-4385-9c0e-20dfce932715', 96, '2023-09-24T13:52:54.768Z', false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '2c688e5e-fcf3-440c-a164-14acebe4ab82');

INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('883626b0-0181-4227-af0c-6101f75b4d41', 'Deduction for educational expenses up to 2000 per year.', 'Improvements must meet specific energy efficiency requirements.');
INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('4da0afef-2901-4bfb-868b-b1a62611bf4a', 'Child and Dependent Care Credit up to 3000 per dependent.', 'Must have earned income and child must be under 13 years of age.');
INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('90d3b6e7-031f-47a6-be9a-61ff6255a7f7', 'Energy efficient home improvements credit up to 30 of cost.', 'Must purchase a new qualified plugin electric drive motor vehicle.');
INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('ee5b315b-abf7-4fe6-97b4-4f23eda58674', 'Child and Dependent Care Credit up to 3000 per dependent.', 'Improvements must meet specific energy efficiency requirements.');
INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('79d93a89-0828-46a5-95ac-a197f7218302', 'Child and Dependent Care Credit up to 3000 per dependent.', 'Must purchase a new qualified plugin electric drive motor vehicle.');
INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('584e3ec9-f4a1-4cea-adac-6691f46dffb9', 'Deduction for educational expenses up to 2000 per year.', 'Must purchase a new qualified plugin electric drive motor vehicle.');
INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('0e38a905-6e7c-4003-a324-8e8f583e055b', 'Energy efficient home improvements credit up to 30 of cost.', 'Must purchase a new qualified plugin electric drive motor vehicle.');
INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('b6a69b19-54b6-4de0-91c8-770865d74217', 'Deduction for educational expenses up to 2000 per year.', 'Must be enrolled in an eligible educational institution.');
INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('5f2cc27c-9e14-4336-85f2-914ca3abd858', 'Child and Dependent Care Credit up to 3000 per dependent.', 'Improvements must meet specific energy efficiency requirements.');
INSERT INTO "tax_benefit" ("id", "description", "eligibilityCriteria") VALUES ('255187e2-a8d9-4673-84e6-e57820fe6fb8', 'Tax credit for electric vehicle purchase up to 7500.', 'Must have a mortgage on a primary residence.');

INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (314, '19903af3-8831-4173-8890-c1418ae57656', '584e3ec9-f4a1-4cea-adac-6691f46dffb9', 'df3b76ad-c396-404e-a650-df295d35bb9a');
INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (841, '186e3940-c567-4ccd-96d2-f5f380900cb2', '584e3ec9-f4a1-4cea-adac-6691f46dffb9', 'b9c4f6fb-3e18-43e2-96ba-8e2861264b35');
INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (903, '24420f71-fc98-4e3d-9f7c-6e53af1ac60b', '5f2cc27c-9e14-4336-85f2-914ca3abd858', 'f96cf1d2-559b-420c-95ee-56c86f53edd0');
INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (579, '9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6', 'b6a69b19-54b6-4de0-91c8-770865d74217', '5070d2ec-fc6c-46d0-9ad6-41896ba73eef');
INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (623, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '0e38a905-6e7c-4003-a324-8e8f583e055b', '50d2aa9f-850d-4b80-8259-1b9a35cea874');
INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (930, 'cb76ad3a-1877-46dd-b92a-5d045b5b7300', '79d93a89-0828-46a5-95ac-a197f7218302', 'd20fe8df-7f04-4167-89e1-8f6822acefa2');
INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (476, '9f38a39a-bb0d-479f-a446-355220e835b4', '90d3b6e7-031f-47a6-be9a-61ff6255a7f7', 'b0d4127d-6ace-4f7b-927f-65c65a56986c');
INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (560, '186e3940-c567-4ccd-96d2-f5f380900cb2', '79d93a89-0828-46a5-95ac-a197f7218302', '4b49b294-8a89-4688-b2b2-492ceb19bf5a');
INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (766, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '90d3b6e7-031f-47a6-be9a-61ff6255a7f7', '19d93b33-a567-422e-857a-f51df424abc9');
INSERT INTO "user_tax_benefit" ("applicableYear", "userId", "benefitId", "id") VALUES (446, '7123677b-508d-4750-a2ca-776f11a06edf', '584e3ec9-f4a1-4cea-adac-6691f46dffb9', '5a40f916-fe71-47ea-b48b-bd2df61da496');

INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('710da12e-7edf-4b5c-ad40-c70efa36f318', 'Quarterly Budget Review', '2024-07-01T07:13:34.068Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('4c4bb000-8610-41d1-be46-a8d1120fc17d', 'Quarterly Budget Review', '2024-05-31T23:28:34.112Z', '702dce64-755a-4c44-afd9-9a272f612da4');
INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('86063c68-8594-4464-bd04-f36f690e0474', 'Expense Category Analysis', '2024-01-27T20:11:25.143Z', '24420f71-fc98-4e3d-9f7c-6e53af1ac60b');
INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('d9ba29d2-5f1b-4348-92e2-03b170468516', 'Yearly Savings Goal Report', '2024-10-01T05:23:48.925Z', '9f38a39a-bb0d-479f-a446-355220e835b4');
INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('9047c33b-cb6e-4fcb-bc6a-1c33455701c8', 'Annual Tax Report', '2024-04-27T02:46:12.377Z', '24420f71-fc98-4e3d-9f7c-6e53af1ac60b');
INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('856bc464-c6a9-401e-ae21-32112bd53faa', 'Quarterly Budget Review', '2024-05-03T20:06:27.979Z', '9d75bf98-d7d9-4a20-a86c-6ba7fcc9bff6');
INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('6a1b1d52-c309-4526-be07-e35aa373a478', 'Annual Tax Report', '2023-12-30T14:00:24.503Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('cfa375d7-5411-4b89-a7f4-17bb1ef8f7c7', 'Expense Category Analysis', '2023-10-12T00:10:56.493Z', 'cb76ad3a-1877-46dd-b92a-5d045b5b7300');
INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('ef3b8b37-fef6-4fc9-ac4e-37df9193dcf5', 'Annual Tax Report', '2024-04-23T17:20:08.685Z', '24420f71-fc98-4e3d-9f7c-6e53af1ac60b');
INSERT INTO "report" ("id", "reportType", "generatedDate", "userId") VALUES ('d8022818-0904-4b1d-83b1-985376af0080', 'Expense Category Analysis', '2024-09-08T23:01:12.872Z', '9f38a39a-bb0d-479f-a446-355220e835b4');

INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('d84e8658-9d11-4a4a-93c3-95137a59397c', 'Monthly Grocery Spending', 20, 'd8022818-0904-4b1d-83b1-985376af0080');
INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('f03b3592-821f-4e2d-b03c-be311b8bf12b', 'Biannual Travel Budget', 802, 'cfa375d7-5411-4b89-a7f4-17bb1ef8f7c7');
INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('29202578-3da0-49ec-8099-d3b6be0fce95', 'Yearly Medical Costs', 153, '9047c33b-cb6e-4fcb-bc6a-1c33455701c8');
INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('de3c20e0-e030-481f-be2c-3e3699741f1a', 'Quarterly Entertainment Expenses', 696, '710da12e-7edf-4b5c-ad40-c70efa36f318');
INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('5cea63f0-0a21-4de2-9643-d38b8f8c01f2', 'Quarterly Entertainment Expenses', 365, '9047c33b-cb6e-4fcb-bc6a-1c33455701c8');
INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('b9e18ca3-2fe6-4598-89a9-bd1bd975752e', 'Yearly Medical Costs', 421, '856bc464-c6a9-401e-ae21-32112bd53faa');
INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('c6c844a1-a8a3-4771-82d6-31119d917da4', 'Monthly Grocery Spending', 575, 'ef3b8b37-fef6-4fc9-ac4e-37df9193dcf5');
INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('cb20ea64-8606-440d-b95b-c53d71b0aa16', 'Monthly Grocery Spending', 971, '4c4bb000-8610-41d1-be46-a8d1120fc17d');
INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('c10772a8-b475-485a-8de4-5b8a9b852d18', 'Biannual Travel Budget', 488, '856bc464-c6a9-401e-ae21-32112bd53faa');
INSERT INTO "report_detail" ("id", "detailDescription", "value", "reportId") VALUES ('a712b8db-0ab1-440d-ad1f-1dd0a7e2c8dc', 'Yearly Medical Costs', 728, '856bc464-c6a9-401e-ae21-32112bd53faa');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
