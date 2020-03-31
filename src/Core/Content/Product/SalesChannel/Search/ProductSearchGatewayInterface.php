<?php declare(strict_types=1);

namespace Shopware\Core\Content\Product\SalesChannel\Search;

use Shopware\Core\Framework\DataAbstractionLayer\Search\EntitySearchResult;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Symfony\Component\HttpFoundation\Request;

/**
 * @deprecated tag:v6.2.0 use \Shopware\Core\Content\Product\SalesChannel\Search\AbstractProductSearchRoute instead
 */
interface ProductSearchGatewayInterface
{
    public function search(Request $request, SalesChannelContext $salesChannelContext): EntitySearchResult;
}
