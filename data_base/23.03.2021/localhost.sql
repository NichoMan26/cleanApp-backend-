-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Мар 23 2021 г., 17:29
-- Версия сервера: 5.7.27-30
-- Версия PHP: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `u1055291_bilar`
--
CREATE DATABASE IF NOT EXISTS `u1055291_bilar` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `u1055291_bilar`;

-- --------------------------------------------------------

--
-- Структура таблицы `carsV`
--
-- Создание: Мар 16 2021 г., 22:11
-- Последнее обновление: Мар 23 2021 г., 13:27
--

CREATE TABLE `carsV` (
  `id` bigint(20) NOT NULL,
  `car` text NOT NULL,
  `creater` text NOT NULL,
  `place` text NOT NULL,
  `number` text NOT NULL,
  `service` text NOT NULL,
  `washer` text NOT NULL,
  `comment` text NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `carsV`
--

INSERT INTO `carsV` (`id`, `car`, `creater`, `place`, `number`, `service`, `washer`, `comment`, `date`) VALUES
(1615796500202, 'BMW 530', 'Sergey', 'V', '94939', 'P', 'Igor', '', '2021-03-15 00:00:00'),
(1615797720088, 'KIA OPTIMA', 'Sergey', 'V', '03914', 'T', 'Igor', '', '2021-03-15 00:00:00'),
(1615799093195, 'AUDI A6', 'Sergey', 'V', '60915', 'T', 'Igor', '', '2021-03-15 00:00:00'),
(1615801723669, 'BMW X5', 'Sergey', 'V', '65203', 'T', 'Igor', '', '2021-03-15 00:00:00'),
(1615805302149, 'FORD', 'Sergey', 'V', '59763', 'T', 'Igor', '', '2021-03-15 00:00:00'),
(1615808615624, 'VW PASSAT ', 'Sergey', 'V', '28421', 'T', 'Igor', '', '2021-03-15 00:00:00'),
(1615811743223, 'BMW 218', 'Sergey', 'V', '49177', 'T', 'Igor', '', '2021-03-15 00:00:00'),
(1615812003696, 'BONUS', 'Sergey', 'V', 'BONUS', 'B', 'Igor', 'Bonus', '2021-03-15 00:00:00'),
(1615837099298, 'LEXUS', 'Sergey', 'V', '00698', 'P', 'Igor', '', '2021-03-15 00:00:00'),
(1615837134736, 'VW POLO ', 'Sergey', 'V', 'TZH-285', 'P', 'Igor', '', '2021-03-15 00:00:00'),
(1615881020855, 'MITSUBISHI OUTLANDER', 'Denis', 'V', 'YLB-695', 'P', 'Denis', 'Резина в G-8', '2021-03-16 00:00:00'),
(1615883331632, 'MB ', 'Denis', 'V', 'XVP-585', 'T', 'Sergey', 'Колеса А6', '2021-03-16 00:00:00'),
(1615888413793, 'VOLVO V70', 'Denis', 'V', 'EKY-191', 'P', 'Sergey', '', '2021-03-16 00:00:00'),
(1615888518701, 'PANTIAK', 'Denis', 'V', 'NJY-17', 'K', 'Sergey', '', '2021-03-16 00:00:00'),
(1615889162515, 'SKODA SUPER B', 'Denis', 'V', '06780', 'P', 'Sergey', '', '2021-03-16 00:00:00'),
(1615890058342, 'VW PASSAT', 'Denis', 'V', 'XLZ-738', 'P', 'Sergey', '', '2021-03-16 00:00:00'),
(1615893050263, 'AUDI A6', 'Denis', 'V', 'JKN-307', 'T', 'Sergey', '', '2021-03-16 00:00:00'),
(1615895762157, 'MB C', 'Denis', 'V', 'LLS-652', 'T', 'Sergey', 'H-3', '2021-03-16 00:00:00'),
(1615899596790, 'MB C220', 'Denis', 'V', 'COG-891', 'T', 'Sergey', '', '2021-03-16 00:00:00'),
(1615902439834, 'MB ML250', 'Denis', 'V', 'FOI-357', 'P', 'Sergey', '', '2021-03-16 00:00:00'),
(1615904557073, 'VW PASSAT', 'Denis', 'V', 'NLZ-424', 'P', 'Sergey', '', '2021-03-16 00:00:00'),
(1615906523439, 'VOLVO', 'Sergey', 'V', 'YLH-736', 'T', 'Denis', '', '2021-03-16 00:00:00'),
(1615909729228, 'VW', 'Denis', 'V', 'MKZ-763', 'T', 'Sergey', '', '2021-03-16 00:00:00'),
(1615909809404, 'BONUS', 'Denis', 'V', 'BONUS', 'B', 'Sergey', 'Bonus', '2021-03-16 00:00:00'),
(1615912209196, 'AUDI A4', 'Denis', 'V', '54480', 'P', 'Sergey', '', '2021-03-16 00:00:00'),
(1615912228255, 'AUDI A4', 'Denis', 'V', '54480', 'R', 'Sergey', '', '2021-03-16 00:00:00'),
(1615966752062, 'CHRYSLER', 'Sergey', 'V', 'MLL-820', 'K', 'Igor', '', '2021-03-17 10:39:25'),
(1615971125317, 'RENAULT', 'Sergey', 'V', '71095', 'T', 'Igor', '', '2021-03-17 11:52:06'),
(1615975181601, 'KIA', 'Sergey', 'V', 'LZO-484', 'P', 'Igor', '', '2021-03-17 12:59:43'),
(1615975209669, 'BMW ', 'Sergey', 'V', 'CLZ-270', 'P', 'Igor', '', '2021-03-17 13:00:12'),
(1615975922540, 'MB ', 'Sergey', 'V', 'RPL-229', 'P', 'Igor', '', '2021-03-17 13:12:03'),
(1615976424176, 'BMW 330', 'Sergey', 'V', 'YLH-746', 'P', 'Igor', '', '2021-03-17 13:20:25'),
(1615977894872, 'MITSUBISHI ', 'Sergey', 'V', '08402', 'P', 'Igor', '', '2021-03-17 13:45:14'),
(1615979711460, 'MITSUBISHI', 'Sergey', 'V', '02176', 'T', 'Igor', '', '2021-03-17 14:15:13'),
(1615985713094, 'VOLVO XC60', 'Sergey', 'V', 'NMC-249', 'P', 'Igor', '', '2021-03-17 15:55:14'),
(1615985744949, 'FORD MONDEO', 'Sergey', 'V', '56242', 'P', 'Igor', '', '2021-03-17 15:55:45'),
(1615985793837, 'HYUNDAI IONIC ', 'Sergey', 'V', '18985', 'P', 'Igor', '', '2021-03-17 15:56:34'),
(1615986160244, 'SEAT', 'Sergey', 'V', 'YIO-795', 'P', 'Igor', '', '2021-03-17 16:02:41'),
(1615988541409, 'VW PASSAT', 'Sergey', 'V', '28421', 'P', 'Igor', '', '2021-03-17 16:42:43'),
(1615989943947, 'HYUNDAI TUCSON', 'Sergey', 'V', 'CMZ-481', 'T', 'Igor', '', '2021-03-17 17:05:46'),
(1615993436516, 'BMW', 'Sergey', 'V', 'RSU-274', 'T', 'Igor', '', '2021-03-17 18:03:58'),
(1615993683301, 'VOLVO V50', 'Sergey', 'V', 'YVP-194', 'T', 'Igor', '', '2021-03-17 18:08:15'),
(1615996086612, 'VOLVO V60', 'Sergey', 'V', 'LOS-488', 'T', 'Igor', '', '2021-03-17 18:48:18'),
(1615996121931, 'BONUS', 'Sergey', 'V', 'BONUS', 'B', 'Igor', '', '2021-03-17 18:48:44'),
(1616056634355, 'AUDI A3', 'Igor', 'V', 'XNH-720', 'P', 'Sergey', '', '2021-03-18 11:37:27'),
(1616057848409, 'TOYOTA AVENSIS', 'Igor', 'V', 'IJR-167', 'K', 'Sergey', '', '2021-03-18 11:57:41'),
(1616058625242, 'MB VIANO', 'Igor', 'V', 'BSR-449', 'K', 'Sergey', '', '2021-03-18 12:10:38'),
(1616060236772, 'VW TRANSPORTER', 'Igor', 'V', '12826', 'P', 'Sergey', '', '2021-03-18 12:37:17'),
(1616061070413, 'TOYOTA COROLLA', 'Igor', 'V', 'NHB-228', 'T', 'Sergey', '', '2021-03-18 12:51:13'),
(1616067103474, 'SKODA OCTAVIA', 'Igor', 'V', 'NJO-131', 'T', 'Sergey', '', '2021-03-18 14:31:51'),
(1616068400427, 'BMW 4', 'Igor', 'V', 'RST-284', 'T', 'Sergey', '', '2021-03-18 14:53:34'),
(1616073077456, 'MB B', 'Igor', 'V', 'BTJ-573', 'P', 'Sergey', '', '2021-03-18 16:11:30'),
(1616074525295, 'VW PASSAT', 'Sergey', 'V', '17848', 'P', 'Igor', '', '2021-03-18 16:35:26'),
(1616078657723, 'VW PASSAT', 'Sergey', 'V', 'LTY-986', 'T', 'Igor', '', '2021-03-18 17:44:18'),
(1616141931203, 'MB ML250', 'Igor', 'V', 'FOI-357', 'P', 'Sergey', '', '2021-03-19 11:18:51'),
(1616143298156, 'CITROEN JUMPY', 'Igor', 'V', 'LLK-904', 'T', 'Sergey', '', '2021-03-19 11:41:39'),
(1616145965626, 'MITSUBISHI', 'Sergey', 'V', '08402', 'P', 'Igor', '', '2021-03-19 13:40:28'),
(1616146056562, 'MITSUBISHI OUTL', 'Igor', 'V', '08402', 'P', 'Sergey', '', '2021-03-19 12:27:37'),
(1616147135655, 'FORD MONDEO', 'Igor', 'V', 'ILM-619', 'T', 'Sergey', '', '2021-03-19 12:45:36'),
(1616150738302, 'AUDI A3', 'Sergey', 'V', '75878', 'P', 'Igor', '', '2021-03-19 13:45:39'),
(1616155069192, 'MITSUBISHI OUTL', 'Igor', 'V', '08804', 'T', 'Sergey', '', '2021-03-19 14:58:02'),
(1616155093991, '', 'Igor', 'V', '', 'Mp', 'Sergey', '', '2021-03-19 14:58:14'),
(1616157956897, 'MITSUBISHI OUTL', 'Igor', 'V', '01445', 'T', 'Sergey', '', '2021-03-19 15:45:57'),
(1616164228603, 'SKODA SUPERB', 'Sergey', 'V', '46568', 'T', 'Igor', '', '2021-03-19 17:30:29'),
(1616165573621, 'VW GOLF', 'Igor', 'V', '04152', 'T', 'Sergey', '', '2021-03-19 17:52:54'),
(1616165616843, 'BONUS', 'Igor', 'V', '', 'B', 'Sergey', '', '2021-03-19 17:53:37'),
(1616227537582, 'MITSUBISHI OUTLANDER', 'Denis', 'V', '09326', 'T', 'Denis', '', '2021-03-20 11:05:39'),
(1616232841130, 'BMW E', 'Denis', 'V', 'RPL-229', 'P', 'Denis', '', '2021-03-20 12:34:02'),
(1616233803979, 'TOYOTA AVENSIS', 'Denis', 'V', 'XRG-865', 'K', 'Denis', '', '2021-03-20 12:50:05'),
(1616237656275, 'FIAT', 'Denis', 'V', 'ZAY-819', 'K', 'Denis', '', '2021-03-20 13:54:18'),
(1616241535789, 'CHEVROLET', 'Denis', 'V', 'CTH-678', 'T', 'Denis', '', '2021-03-20 14:58:59'),
(1616399020403, 'MB ', 'Sergey', 'V', '05567', 'T', 'Igor', '', '2021-03-22 10:43:53'),
(1616402699012, 'LEXUS LS500', 'Igor', 'V', 'IZA-277', 'P', 'Sergey', '', '2021-03-22 11:44:59'),
(1616405797274, 'BMW 330', 'Igor', 'V', '21919', 'T', 'Sergey', '', '2021-03-22 12:36:38'),
(1616408369968, 'FORD GALAXY', 'Sergey', 'V', '26745', 'T', 'Igor', '', '2021-03-22 13:19:30'),
(1616411623586, 'TOYOTA AURIS', 'Igor', 'V', 'XNT-629', 'T', 'Sergey', '', '2021-03-22 14:13:44'),
(1616414287141, 'VOLVO V60', 'Igor', 'V', 'NLK-459', 'P', 'Sergey', '', '2021-03-22 14:58:08'),
(1616416816848, 'MB A180', 'Sergey', 'V', 'OXP-588', 'T', 'Igor', '', '2021-03-22 15:40:33'),
(1616417196854, 'BMW 116', 'Igor', 'V', 'VOZ-922', 'T', 'Sergey', '', '2021-03-22 15:46:37'),
(1616417218765, 'BONUS', 'Igor', 'V', '', 'B', 'Sergey', '', '2021-03-22 15:46:59'),
(1616420155610, 'MAZDA CX5', 'Igor', 'V', '06079', 'P', 'Sergey', '', '2021-03-22 16:36:08'),
(1616421510909, 'MITSUBISHI OUTL', 'Igor', 'V', 'ETY-888', 'P', 'Sergey', '', '2021-03-22 16:58:31'),
(1616423315720, 'AUDI A3', 'Igor', 'V', 'JJB-471', 'P', 'Sergey', '', '2021-03-22 17:28:36'),
(1616424385259, 'MB B250', 'Igor', 'V', 'MYZ-304', 'P', 'Sergey', '', '2021-03-22 17:46:26'),
(1616481132011, 'VW GOLF', 'Sergey', 'V', 'VTZ-911', 'T', 'Igor', '', '2021-03-23 09:32:24'),
(1616487081505, 'MB C', 'Igor', 'V', 'MSY-139', 'T', 'Sergey', '', '2021-03-23 11:11:22'),
(1616492055762, 'VOLVO V40', 'Igor', 'V', 'UZY-909', 'T', 'Sergey', 'D-14', '2021-03-23 12:34:16'),
(1616494562196, 'BMW 3', 'Igor', 'V', 'UZH-325', 'T', 'Sergey', '', '2021-03-23 13:16:02'),
(1616496359516, 'FORD FOCUS', 'Igor', 'V', 'VXR-915', 'P', 'Sergey', '', '2021-03-23 13:46:00'),
(1616498629809, 'SEAT LEON', 'Igor', 'V', 'EMV-234', 'T', 'Sergey', '', '2021-03-23 14:23:50'),
(1616501814436, 'AUDI A4', 'Igor', 'V', 'NJV-310', 'P', 'Sergey', '', '2021-03-23 15:16:55'),
(1616503280560, 'SKODA CITIGO', 'Igor', 'V', 'LTZ-752', 'T', 'Sergey', '', '2021-03-23 15:41:21'),
(1616503304681, 'BONUS', 'Igor', 'V', '', 'B', 'Sergey', 'undefined', '2021-03-23 15:41:45'),
(1616504442615, 'MAZDA 6', 'Igor', 'V', 'VXK-742', 'T', 'Sergey', '', '2021-03-23 16:00:43'),
(1616506055735, 'VW PASSAT', 'Igor', 'V', 'IKH-240', 'K', 'Sergey', '', '2021-03-23 16:27:36');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `carsV`
--
ALTER TABLE `carsV`
  ADD UNIQUE KEY `id` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
