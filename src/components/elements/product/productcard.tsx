"use client";

import { useProductStore } from "@/store/ProductStore";
import { Product } from "@/types/product";
import { useState } from "react";
import { Toaster } from "sonner";
import { StoreHook } from "../../hooks/store-hook";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import ActionButtons from "./product-buttons";
import ProductDetails from "./product-details";
import ProductImage from "./product-image";
import ProductInfo from "./product-info";
import RecommendedProducts from "./product-recommendations";
import { Dialog, DialogContent } from "../../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { productDetailsMutation } = StoreHook();
  const { products } = useProductStore();

  const handleProductClick = () => {
    productDetailsMutation.mutateAsync({ productId: product.productId } as any);
    setIsDialogOpen(true);
  };

  return (
    <section className="overflow-auto hover:shadow-xl">
      <Toaster richColors position="top-right" />
      <Card
        key={product.articleId}
        className="over:duration-150 flex cursor-pointer flex-col rounded-3xl bg-white"
        onClick={handleProductClick}
      >
        <div className="ml-3 mt-3 text-sm">{product.productId}</div>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="w-full max-w-[200px] truncate text-sm font-medium">
            {product.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col overflow-hidden">
          <ProductImage imageURL={product.imageURL} title={product.title} />
          <ProductInfo product={product} />
          <ActionButtons product={product} />
        </CardContent>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTitle></DialogTitle>
        <DialogContent className="max-h-[90vh] w-full max-w-[1400px] overflow-y-auto bg-white p-6 md:p-10">
          <ProductDetails product={product} addToCart={addToCart} />
          <RecommendedProducts
            products={products}
            currentProductId={product.productId}
            addToCart={addToCart}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductCard;
