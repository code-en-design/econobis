<?php

namespace App\Gmail\Services;

use App\Gmail\LaravelGmailClass;
use App\Gmail\Services\Message\Mail;
use App\Gmail\Traits\Filterable;
use App\Gmail\Traits\SendsParameters;
use Google_Service_Gmail;

class Message
{

	use SendsParameters,
		Filterable;

	public $service;

	public $preload = false;

	public $pageToken;

	public $client;

	/**
	 * Optional parameter for getting single and multiple emails
	 *
	 * @var array
	 */
	protected $params = [];

	/**
	 * Message constructor.
	 *
	 * @param  LaravelGmailClass  $client
	 */
	public function __construct(LaravelGmailClass $client)
	{
        echo "Construct Message: " . $client->userId . "<br/>";

		$this->client = $client;
		$this->service = new Google_Service_Gmail($client);
	}

	/**
	 * Returns next page if available of messages or an empty collection
	 *
	 * @return \Illuminate\Support\Collection
	 * @throws \Google_Exception
	 */
	public function next()
	{
		if ($this->pageToken) {
			return $this->all($this->pageToken);
		} else {
			return new MessageCollection([], $this);
		}
	}

	/**
	 * Returns a collection of Mail instances
	 *
	 * @param null|string $pageToken
	 *
	 * @return \Illuminate\Support\Collection
	 * @throws \Google_Exception
	 */
	public function all($pageToken = null)
	{
		if (!is_null($pageToken)) {
			$this->add($pageToken, 'pageToken');
		}

		$messages = [];
		$response = $this->getMessagesResponse();
		$this->pageToken = method_exists( $response, 'getNextPageToken' ) ? $response->getNextPageToken() : null;

		$allMessages = $response->getMessages();
        echo "Aantal messages: " . ($allMessages ? count($allMessages) : 'geen') . "<br/>";

		if (!$this->preload) {
            echo "geen preload<br/>";
			foreach ($allMessages as $message) {
				$messages[] = new Mail($message, $this->preload, $this->client->userId);
			}
		} else {
            echo "wel preload<br/>";
			$messages = $this->batchRequest($allMessages);
		}

		$all = new MessageCollection($messages, $this);

		return $all;
	}

	/**
	 * Returns boolean if the page token variable is null or not
	 *
	 * @return bool
	 */
	public function hasNextPage()
	{
		return !!$this->pageToken;
	}

	/**
	 * Limit the messages coming from the queryxw
	 *
	 * @param  int  $number
	 *
	 * @return Message
	 */
	public function take($number)
	{
		$this->params['maxResults'] = abs((int) $number);

		return $this;
	}

	/**
	 * @param $id
	 *
	 * @return Mail
	 */
	public function get($id)
	{
		$message = $this->getRequest($id);
        echo "UserId in get: " . $this->client->userId . "<br/>";

		return new Mail($message, false, $this->client->userId);
	}

	/**
	 * Creates a batch request to get all emails in a single call
	 *
	 * @param $allMessages
	 *
	 * @return array|null
	 */
	public function batchRequest($allMessages)
	{
        echo "Hallo batchRequest!<br/>";
		$this->client->setUseBatch(true);
        echo "a<br/>";

		$batch = $this->service->createBatch();
        echo "b<br/>";

		foreach ($allMessages as $key => $message) {
            echo "1";
			$batch->add($this->getRequest($message->getId()), $key);
		}
        echo "c<br/>";

		$messagesBatch = $batch->execute();
        echo "d<br/>";

		$this->client->setUseBatch(false);
        echo "e<br/>";

		$messages = [];
		echo "UserId in batchRequest: " . $this->client->userId . "<br/>";
		foreach ($messagesBatch as $message) {
			$messages[] = new Mail($message, false, $this->client->userId);
		}

		return $messages;
	}

	/**
	 * Preload the information on each Mail objects.
	 * If is not preload you will have to call the load method from the Mail class
	 * @return $this
	 * @see Mail::load()
	 *
	 */
	public function preload()
	{
        echo "UserId in preload: " . $this->client->userId . "<br/>";
		$this->preload = true;

		return $this;
	}

	public function getUser()
	{
		return $this->client->user();
	}

	/**
	 * @param $id
	 *
	 * @return \Google_Service_Gmail_Message
	 */
	private function getRequest($id)
	{
		return $this->service->users_messages->get('me', $id);
	}

	/**
	 * @return \Google_Service_Gmail_ListMessagesResponse|object
	 * @throws \Google_Exception
	 */
	private function getMessagesResponse()
	{
		$responseOrRequest = $this->service->users_messages->listUsersMessages( 'me', $this->params );

        echo "MessageResponse class " . get_class( $responseOrRequest ) . "<br/>";

		if ( get_class( $responseOrRequest ) === "GuzzleHttp\Psr7\Request" ) {
            echo "Google service aanroep voor response<br/>";
            echo "Request:<br/>";
            print_r($responseOrRequest);
            echo "<br/>";
			$response = $this->service->getClient()->execute( $responseOrRequest, 'Google_Service_Gmail_ListMessagesResponse' );

            echo "Response aantal: " . count( $response->getMessages() ) . "<br/>";

            return $response;
		}

        echo "Google service aanroep voor response<br/>";
        echo "Request:<br/>";
        print_r($responseOrRequest);
        echo "<br/>";
        echo "Response or request aantal: " . count( $responseOrRequest->getMessages() ) . "<br/>";

		return $responseOrRequest;
	}
}
