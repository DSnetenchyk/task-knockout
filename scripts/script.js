function AppViewModel() {
	var self = this;

	chklist: ko.observable(true),
	self.list = ko.observableArray([
		{id: '1.', name: 'О компании QAP INT.'},
		{id: '2.', name: 'Преимущества использования CLM-инструмента для Вашего бизнеса.'},
		{id: '3.', name: 'Перспективы сотрудничества с QAP iNT.'},
		{id: '4.', name: 'Описание решения для разработки HTML5-презентаций.'},
		{id: '5.', name: 'Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (русский).'},
		{id: '6.', name: 'Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (english).'}
	]);
}

ko.applyBindings(new AppViewModel());