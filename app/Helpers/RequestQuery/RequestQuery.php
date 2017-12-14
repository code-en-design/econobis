<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 27-10-2017
 * Time: 9:14
 */

namespace App\Helpers\RequestQuery;

use Illuminate\Http\Request;

abstract class RequestQuery
{

    /**
     * @var RequestFilter
     */
    protected $filter;
    /**
     * @var RequestJoiner
     */
    protected $joiner;
    /**
     * @var RequestSort
     */
    protected $sort;

    protected $offsetParameter = 'offset';
    protected $limitParameter = 'limit';

    /**
     * @var Request
     */
    protected $request;

    public function __construct(Request $request,
                                RequestFilter $filter = null,
                                RequestSort $sort = null,
                                RequestJoiner $joiner = null)
    {
        $this->request = $request;
        $this->filter = $filter;
        $this->sort = $sort;
        $this->joiner = $joiner;

        $this->init();
    }

    public function apply($query)
    {
        $this->applyFilter($query);
        $this->applySort($query);
        $this->applyPagination($query);
    }

    protected function init()
    {
        if ($this->filter) $this->filter->setJoiner($this->joiner);
        if ($this->sort) $this->sort->setJoiner($this->joiner);
    }

    public function getQuery()
    {
        $query = $this->baseQuery();

        $this->apply($query);

        return $query;
    }

    public function get()
    {
        return $this->getQuery()->get();
    }

    public function total()
    {
        $query = $this->baseQuery();
        $this->applyFilter($query);
        return $query->count();
    }

    /**
     * @param $query
     */
    protected function applyFilter($query)
    {
        if ($this->filter) $this->filter->apply($query);
    }

    /**
     * @param $query
     */
    protected function applySort($query)
    {
        if ($this->sort) $this->sort->apply($query);
    }

    abstract protected function baseQuery();

    protected function applyPagination($query)
    {
        $limit = $this->getLimit();
        $offset = $this->getOffset();

        if($limit) $query->limit($this->getLimit());
        if($offset && $limit) $query->offset($this->getOffset()); // Offset kan alleen gezet werden icm limit

        return $query;
    }

    protected function getLimit()
    {
        return (int) $this->request->input($this->limitParameter, null);
    }

    protected function getOffset()
    {
        return (int) $this->request->input($this->offsetParameter, null);
    }
}