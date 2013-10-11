'use strict';
/* Controllers */
function AppCtrl($scope)
{
	/*
	 <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.web.nest.nexsan.com/">
	 <soapenv:Header/>
	 <soapenv:Body>
	 <ser:siteIsConfigured>
	 <parameters></parameters>
	 </ser:siteIsConfigured>
	 </soapenv:Body>
	 </soapenv:Envelope>

	 */

	function createSoapResponse(params)
	{
		var xmlData = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.web.nest.nexsan.com/"><soapenv:Header/><soapenv:Body><ser:siteIsConfigured><parameters>';
		xmlData += params;
		xmlData += '</parameters></ser:siteIsConfigured></soapenv:Body></soapenv:Envelope>';
		return xmlData;
	}

	$scope.test = function ()
	{
		var url = 'http://172.21.156.172:80/noauth/WebService?WSDL';
		var method = 'siteIsConfigured';

		var xmlData = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.web.nest.nexsan.com/"><soapenv:Header/><soapenv:Body><ser:siteIsConfigured><parameters></parameters></ser:siteIsConfigured></soapenv:Body></soapenv:Envelope>';

		var successFunction = function (jqXHR, textStatus)
		{
			var test = true;
		};
		$.ajax({
			url         : url,
			type        : 'POST',
			dataType    : 'text',
			data        : createSoapResponse(''),
			complete    : successFunction,
			contentType : 'text/xml; charset="utf-8"',
			processData : false
		});
	};
}
function HomeController()
{
}
HomeController.$inject = [];
angular.module('myApp.controllers', []).controller('MyCtrl1', [function ()
	{
	}]).controller('MyCtrl2', [function ()
	{
	}]);