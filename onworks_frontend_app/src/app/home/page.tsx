
"use client";

import React, { useState, useEffect, useMemo } from "react";

export interface DefaultLayout {
  layoutId: number;
  userId: number;
  businessUnitId: number;
  itemTypeId: number;
  categoryId: number;
  name: string;
  description: string;
  expression: string;
  createdBY: number;
}

interface ObjectRow {
  id: number;
  apiName: string;
}

interface FormData {
  layoutName: string;
  description: string;
}

const Home: React.FC = () => {
  const [showCreateOrChoose, setShowCreateOrChoose] = useState(false);
  const [showCreateNew, setShowCreateNew] = useState(false);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [designMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentLayoutId, setCurrentLayoutId] = useState<number | null>(null);
  const [rowsData, setRowsData] = useState<any[]>([]);
  
  // const router = useRouter();

  // const { updateLayoutData, setIsEditLayout, setCurrentLayoutDetails } =
  //   useLayout();
  // const { setObjectField } = useObjectField();
  // const { addToast } = useToast();

  // useEffect(() => {
  //   getDefaultLayouts();
  // }, [loading]);

  // const handleSaveAndDesign = (formData: FormData, layoutId: number) => {
  //   setShowCreateNew(false);
  //   setShowAddSectionModal(true);
  //   updateLayoutData({
  //     layoutName: formData.layoutName,
  //     layoutDescription: formData.description,
  //     layoutId: layoutId,
  //   });
  // };

  // const getDefaultLayouts = async () => {
  //   try {
  //     const layouts = await getUiLayoutMaster();
  //     setRowsData(layouts?.data || []);
  //     setDefaultLayouts(layouts?.data);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleOpenLayout = async (layoutDetails: any) => {
  //   const getLayoutDetails = await getLayoutGroupView({
  //     itemTypeId: layoutDetails?.itemTypeId,
  //     layoutId: layoutDetails.layoutId,
  //     layoutType: 0,
  //   });

  //   const layoutData = getLayoutDetails?.data[0];
  //   const parsedLayout = JSON.parse(layoutData?.layoutJSON || "{}");

  //   const hasSections =
  //     parsedLayout?.sections && parsedLayout.sections.length > 0;

  //   // Always update context
  //   updateLayoutData(parsedLayout);
  //   setObjectField(layoutDetails?.itemTypeId);
  //   setCurrentLayoutDetails({
  //     layoutGroupViewId: layoutData?.layoutGroupViewId,
  //     itemTypeId: layoutData?.itemTypeId,
  //   });

  //   setIsEditLayout(true);

  //   //  CASE 1: Layout is EMPTY → open AddSectionModal with prefilled values
  //   if (!hasSections) {
  //     setShowAddSectionModal(true);

  //     // Prefill layout name + description in context
  //     updateLayoutData({
  //       layoutName: layoutDetails.name,
  //       layoutDescription: layoutDetails.description,
  //       layoutId: layoutDetails.layoutId,
  //       sections: parsedLayout.sections ?? [],
  //       buttons: parsedLayout.buttons ?? [],
  //     });

  //     return;
  //   }

  //   //  CASE 2: Layout has existing fields → open normal edit page
  //   if (getLayoutDetails?.data.length) {
  //     router.push(`/grid-layout?layoutId=${layoutData.layoutId}`);
  //   }
  // };

  // const handleDeleteLayout = async () => {
  //   if (!currentLayoutId) return;
  //   setLoading(true);
  //   setShowDeleteConfirmationModal(false);
  //   try{
  //   await deleteUiLayoutMasterById(currentLayoutId as number);
  //   setLoading(false);
  //   addToast({
  //     title: Message.DEL_LAYOUT_TITLE,
  //     description: Message.DEL_LAYOUT_DESC,
  //     variant: "error",
  //     duration: 4000,
  //   });}catch(error){
  //     setLoading(false);
  //     addToast({
  //     title: Message.DEL_LAYOUT_FAIL_TITLE,
  //     description: Message.DEL_LAYOUT_FAIL_DESC,
  //     variant: "error",
  //     duration: 3000,
  //   });
  //   }
  // };
  // const columns = useMemo<ColumnDef<DefaultLayout>[]>(
  //   () => [
  //     {
  //       accessorKey: "name",
  //       header: "Layouts",
       
  //     },
  //     {
  //       accessorKey: "description",
  //       header: "Description",
  //       cell: ({ row }: { row: Row<DefaultLayout> }) =>
  //         row.original.description || "-",
  //       tableColClass: "w-[300px]",
  //       enableGlobalFilter: true,
  //     },
  //     {
  //       id: "actions",
  //       header: "Actions",
  //       tableColClass: "w-[100px] text-center",
  //       cell: ({ row }: { row: Row<DefaultLayout> }) => (
  //         <div className="flex gap-2">
  //           <button onClick={() => handleOpenLayout(row.original)}>
  //             <MdOutlineModeEditOutline
  //               size={20}
  //               className="text-blue-500 hover:text-blue-600 cursor-pointer"
  //             />
  //           </button>
  //           <button
  //             onClick={() => {
  //               setCurrentLayoutId(row.original.layoutId);
  //               setShowDeleteConfirmationModal(true);
  //             }}
  //           >
  //             <FaRegTrashAlt className="text-red-500 hover:text-red-600 cursor-pointer" />
  //           </button>
  //         </div>
  //       ),
  //     },
  //   ],
  //   []
  // );

  return (
    <div className="h-[93vh] overflow-y-scroll bg-gray-50 ">
      {!designMode && (
        <>
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Layout designer
            </h2>
            <div className="text-sm text-gray-600 leading-relaxed">
              Page Layout designer in CRMnext allows you to customize the layout
              of a page within each module like Lead, Accounts, Contacts,
              Appointment and many more as per organization specific
              requirements.
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="ml-auto flex gap-2">
              <button
                onClick={() => setShowCreateOrChoose(true)}
                className="cursor-pointer inline-flex items-center gap-2 px-2 py-1 rounded-md bg-[#2C3E5D] text-white text-xs font-medium shadow-sm hover:bg-[#3B4F70] transition-all duration-200"
              >
                {/* <FaPlus /> */}
                Create
              </button>
            </div>
          </div>

          {rowsData.length > 0 ? (
            <div className="flex flex-col h-[calc(100vh-160px)] bg-white border border-gray-200 rounded-md">
              {/* <DataTable
                columns={columns}
                data={rowsData}
                customFilterValue={frequencyFilter}
                onCustomFilterChange={setFrequencyFilter}
                className="flex-1 p-4"

                // headerGroupsClassName=" h-[55vh]"
              /> */}
            </div>
          ) : (
            <div className="px-6 py-10 text-center text-sm text-gray-500 bg-white">
              No layouts saved yet. Create your first layout!
            </div>
          )}
        </>
      )}

      {/* <CreateNewLayoutModal
        open={showCreateNew}
        onClose={() => setShowCreateNew(false)}
        onSaveAndDesign={handleSaveAndDesign}
      />
      {showAddSectionModal && (
        <AddSectionModal
          onClose={() => setShowAddSectionModal(false)}
          // onBack={() => {
          //   setShowCreateNew(true);
          //   setShowAddSectionModal(false);
          // }}
        />
      )} */}
      {/* <CreateModal
        isOpen={showCreateOrChoose}
        onClose={() => setShowCreateOrChoose(false)}
        onCreateNew={() => {
          setShowCreateOrChoose(false);
          setShowCreateNew(true);
        }}
      /> */}
      {/* <ConfirmationModal
        isOpen={showDeleteConfirmationModal}
        title={Message.DELETE_ITEM}
        message={Message.CONFIRM_DELETE}
        confirmButtonText={ButtonLabels.DELETE}
        cancelButtonText={ButtonLabels.CANCEL}
        onConfirm={handleDeleteLayout}
        onCancel={() => {
          setShowDeleteConfirmationModal(false);
        }}
      /> */}
    </div>
  );
};

export default Home;
