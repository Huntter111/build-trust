<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Отримання даних з форми
	$namePerson = $_POST["name"];
  	$phoneNumber = $_POST["phone"];
	$emailAddres = $_POST["email"];
	$message = $_POST["message"];

	// Налаштування Telegram-бота
	$botToken = "";
	$chatId = "";

	// Формування повідомлення
	$text = "<b>Нове повідомлення Build Trust</b>\n";
	$text .= "<b>Iм'я:</b> " . $namePerson . "\n";
	$text .= "<b>Телефон:</b> " . $phoneNumber . "\n";
	$text .= "<b>Пошта:</b> " . $emailAddres . "\n";
	$text .= "<b>Коментар:</b> " . $message;

	// Відправка повідомлення в Telegram
	$url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";
	$params = [
		'chat_id' => $chatId,
		'parse_mode' => 'HTML',
		'text' => $text
	];

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);

	if ($response) {
		header("Location: https://buildtrust.com.ua/thank-you-page.html");
		exit();
	} else {
		header("Location: https://buildtrust.com.ua/404.html");
		// echo "Error";
	}
}
?>